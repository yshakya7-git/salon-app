const PageTitle = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-md lg:text-3xl font-bold">{title}</h1>
      <p className="text-gray-600 text-sm lg:text-base">{content}</p>
    </div>
  );
};

export default PageTitle;
