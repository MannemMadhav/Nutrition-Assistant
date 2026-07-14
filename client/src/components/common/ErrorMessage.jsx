function ErrorMessage({ message }) {
  return (
    <div className="bg-red-600 text-white rounded-xl p-4">
      {message}
    </div>
  );
}

export default ErrorMessage;