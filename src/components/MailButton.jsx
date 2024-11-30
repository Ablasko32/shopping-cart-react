import { useList } from "../contexts/listContext";

function MailButton() {
  const { toBuy } = useList();
  const names = toBuy?.map(
    (el) =>
      `x${el.quantity} ${el.name} ${el.store !== "sve" ? `| ${el.store}` : ""}`,
  );

  const mailBody = `Popis za trgovinu!\r\nDatum:${new Date().toDateString()}\r\r\n\n${names.join("\r\n")}\r\r\n\nPowered By CartMan`;
  const mailSubject = "Novi popis za trgovinu";

  function handleMail() {
    if (toBuy.length === 0) return;
    window.location.href = `mailto:?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  }

  return (
    <button className="text-4xl text-violet-600  " onClick={handleMail}>
      ✉
    </button>
  );
}

export default MailButton;
