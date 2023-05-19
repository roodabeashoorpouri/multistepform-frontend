import thank from "../assets/images/icon-thank-you.svg";

function Congrats() {
  return (
    <main>
      <img
        src={thank}
        alt='Product'
        style={{
          objectFit: "cover",
        }}
      />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. if you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </main>
  );
}
export default Congrats;
