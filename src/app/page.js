import ButtonLike from "@/components/ButtonLike";
import ButtonSendForm from "@/components/ButtonSendForm";
import CustomCursor from "@/components/CustomCursor";
import SimpleList from "@/components/SimbleList";
import React from "react";

const App = () => {
  return (
    <main
      className="bg-white
     w-full h-screen p-10 flex flex-col gap-3 items-center justify-center"
    >
      <ButtonLike />

      {/*  <br />
      <br />

      <ButtonSendForm />

      <br />
      <br />

      <SimpleList />

      <br />
      <br />

      <CustomCursor /> */}
    </main>
  );
};

export default App;
