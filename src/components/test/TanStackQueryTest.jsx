//react-query

import { sendEmail } from '@src/services/test/TestService.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const GetTest = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h3>GET</h3>
      <h4>{data.name}</h4>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

const TanStackQueryTest = () => {
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: sendEmail,
    onSuccess: () => {
      // 성공 시 실행할 작업
      alert('문의가 접수되었습니다.');
      //캐시 무효화
      queryClient.invalidateQueries('sendEmail');
    },
    onError: () => {
      // 에러 시 실행할 작업
      alert('문의가 접수중 오류가 발생했습니다.');
    },
  });

  const handleClick = () => {
    mutation.mutate({ id: new Date(), title: 'Do Laundry' });
  };

  return (
    <div>
      <h1>TanStackQueryTest</h1>
      <h3>POST</h3>
      {mutation.isPending ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button onClick={handleClick}>Create Todo</button>
        </>
      )}
      <GetTest />
    </div>
  );
};

export default TanStackQueryTest;
