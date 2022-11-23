import { useSession, signIn, signOut } from 'next-auth/react';

export default function User() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={session.user.image}
          alt='user image'
          className='h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1'
        />
      </>
    );
  }
  return (
    <>
      <button
        onClick={signIn}
        className='rounded-md bg-blue-500 text-white px-6 py-2 font-medium hover:brightness-105 hover:shadow-md cursor-pointer'
      >
        Sign in
      </button>
    </>
  );
}
