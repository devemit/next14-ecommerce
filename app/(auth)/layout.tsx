interface childrenProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: childrenProps) {
  return <div className='flex h-screen items-center justify-center'>{children}</div>;
}
