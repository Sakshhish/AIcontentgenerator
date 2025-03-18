"use client";

import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "@/utils/AiModel";
import OutputSection from '../_components/OutputSection';


interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"]
    );
  const [loading,setLoading]=useState(false);
  const [aiOutput,SetAIOutput]=useState<string>('')

  const GenerateAIContent = async(formData: any) => {
    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;

    const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;

    const result=await chatSession.sendMessage(FinalAIPrompt);

    console.log(result.response.text());
    SetAIOutput(result?.response.text());
    setLoading(false);
  };

  return (
    <div className="p-10">
      {/* Back Button */}
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />

        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  );
}

export default CreateContent;
