export default function Footer() {
  return (
    <footer className='absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap text-gray-600 text-sm p-6'>
      <p>Copyright &copy; {new Date().getFullYear()} Laurie Roy</p>
    </footer>
  );
}