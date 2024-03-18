import submitForm from './submitForm';

export default function ContactFormApp() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
    >
      <input type="text" />
    </form>
  );
}
