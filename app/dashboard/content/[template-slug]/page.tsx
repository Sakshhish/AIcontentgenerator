"use client";

import React, { useState, use } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { chatSession } from "@/utils/AiModel";

interface PROPS {
  params: Promise<{ "template-slug": string }>;
}

function CreateNewContent(props: PROPS) {
  const unwrappedParams = use(props.params); // ✅ Unwrap params first
  const selectedTemplate: TEMPLATE|undefined=Templates?.find(
    (item) => item.slug === unwrappedParams["template-slug"]
  );

  //creating a state for loading
  const [loading,setLoading]=useState(false);
  const [aiOutput,setAiOutput]=useState<string>("");

  //function to generate AI content
  const GenerateAIContent=async(formData: any)=>{
    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt

    const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt

    const result = await chatSession.sendMessage(FinalAIPrompt);

    // Wait for the text to resolve from the response
    const text = await result.response.text();

    console.log("AI Response:", text);

    // Set the actual text as the aiOutput
    setAiOutput(text);

    setLoading(false);


  };

  console.log(unwrappedParams["template-slug"]);

  return (
    <div className="p-10">
      <Link href="/dashboard/content">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => console.log(v)}
          loading={loading}
        />

        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
