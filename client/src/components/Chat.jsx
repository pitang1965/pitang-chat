import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useSubscription,
  useMutation,
  gql,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

const link = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link,
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      user
      content
    }
  }
`;

const POST_MESSAGE = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

const Messages = ({ user }) => {
  const { data } = useSubscription(GET_MESSAGES);
  if (!data) {
    return null;
  }

  return (
    <div className='bg-blue-400 p-10'>
      {data.messages.map(({ id, user: messageUser, content }) => (
        <div
          className={`flex pb-3 ${
            user === messageUser ? 'justify-end' : 'justify-start'
          }`}
        >
          {
            <div className='leading-16 h-16 w-16 rounded-full text-center text-2xl mr-4 border-2 border-solid border-gray-300'>
              {messageUser.slice(0, 2).toUpperCase()}
            </div>
          }
          <div
            className={`${
              user === messageUser ? 'bg-green-300' : 'bg-white'
            } text-gray-800 p-2 rounded-2xl message-other-settings`}
          >
            {content}
          </div>
        </div>
      ))}
    </div>
  );
};

const Chat = () => {
  const [state, setState] = useState({
    user: 'ピータン',
    content: '',
  });
  const [postMessage] = useMutation(POST_MESSAGE);

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.content.length > 0) {
      postMessage({ variables: state });
    }
    setState({ ...state, content: '' });
  };

  const testStyle =
    'm-2 py-2 px-4 border-solid border-2 border-light-blue-500 rounded';

  return (
    <div className='flex flex-col flex-wrap'>
      <Messages user={state.user} className='h-4/5' />
      <form onSubmit={onSubmit} className='h-1/5'>
        <input
          type='text'
          placeholder='ユーザー名'
          onChange={(evt) => setState({ ...state, user: evt.target.value })}
          className={testStyle}
        />
        <input
          type='text'
          placeholder='送信内容'
          onChange={(evt) => setState({ ...state, content: evt.target.value })}
          className={testStyle}
        />
        <button className='font-bold m-2 py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700'>
          送信
        </button>
      </form>
    </div>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);
