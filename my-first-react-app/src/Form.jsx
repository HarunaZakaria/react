export default function Form() {
  return (
    <>
      <form action="#">
        <div>
          <label htmlFor="#">Username</label>
          <input
            type="text"
            placeholder="Enter Your Username"
            className="user-name"
            required
          />
        </div>
        <div>
          <label htmlFor="#">Password</label>
          <input
            type="text"
            placeholder="Enter Your Password"
            className="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Sign In
        </button>
      </form>
    </>
  );
}
