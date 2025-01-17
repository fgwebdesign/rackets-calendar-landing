import React from "react";
import News from "@/components/News";
import PageHead from "@/components/Helper/PageHead";

function Page() {
  return (
    <>
      <PageHead title="Appie | News" />
      <News />
    </>
  );
}

export default Page;
