"use client"

import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '@/app/dashboard/_components/TemplateListSection'
import TemplateListSection from '../../_components/TemplateListSection';



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
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
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
  )
}

export default CreateNewContent
