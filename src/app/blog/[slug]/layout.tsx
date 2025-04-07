import '@/features/blog/post/modules/POST_MODULES.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
