"use client"

import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '@/app/dashboard/_components/TemplateListSection'
import TemplateListSection from '../../_components/TemplateListSection';
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button';



interface PROPS{
  params:{
    'template-slug':string
  }
  slug:string
}

function CreateNewContent(props:PROPS) {

  const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug===props.params['template-slug'])

  const GenerateAIContent=(formData:any)=>{
    
  }

  console.log(props.params['template-slug'])
  return (
    <div className='p-10'>
      <Link href='/dashboard/content'>
        <Button><ArrowLeft/> Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* Form Secttion */}
          <FormSection 
          selectedTemplate={selectedTemplate}
          userFormInput={(v:any)=>console.log(v)}
          />

        {/* OutputSection */}
        <div className='col-span-2'>
          <OutputSection />
        </div>
      </div>
    </div>
  )
}


export default CreateNewContent
