import { useState, useEffect } from "react";

export default function Typewriter() {
  const roles = ["Frontend Developer", "Backend Developer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = isDeleting ? 70 : 120;

    const timer = setTimeout(() => {
      const updatedText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return <span className="role-text">{text}<span className="cursor">|</span></span>;
}
