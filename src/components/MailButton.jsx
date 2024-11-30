import { useList } from "../contexts/listContext";

function MailButton() {
  const { toBuy } = useList();
  const names = toBuy?.map((el) => `x${el.quantity} ${el.name} | ${el.store}`);

  const mailBody = `Popis za trgovinu!\nDatum:${new Date().toDateString()}%0D%0A%0D%0A ${names.join("%0D%0A")}%0D%0A%0D%0APowered By CartMan`;
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
