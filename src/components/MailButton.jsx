import { useList } from "../contexts/listContext";

function MailButton() {
  const { toBuy } = useList();
  const names = toBuy.map((el) => `x${el.quantity} ${el.name} | ${el.store}`);

  const mailBody = `Popis za trgovinu!\nDatum:${new Date().toDateString()}\n\n ${names.join("\n")}\n\nPowered By CartMan`;
  const mailSubject = "Novi popis za trgovinu";

  function handleMail() {
    window.location.href = `mailto:?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  }

  return (
    <button className="text-4xl text-violet-600  " onClick={handleMail}>
      ✉
    </button>
  );
}

export default MailButton;
