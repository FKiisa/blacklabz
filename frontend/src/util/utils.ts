export const calculateLastModified = (at: string) => {
  const lastModified = new Date(at);
  const now = new Date();
  const diffInMs = now.getTime() - lastModified.getTime();
  const diffInMinutes = Math.floor(diffInMs / 60000);

  if (diffInMinutes < 1) {
    return "Just now";
  } else {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  }
};

export const generateUniqueKey = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
