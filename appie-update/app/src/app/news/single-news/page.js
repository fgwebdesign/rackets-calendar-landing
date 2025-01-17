import React from "react";
import SingleNews from "@/components/News/SingleNews";
import PageHead from "@/components/Helper/PageHead";

function Page() {
  return (
    <>
      <PageHead title="Appie | Single News" />
      <SingleNews />
    </>
  );
}

export default Page;
