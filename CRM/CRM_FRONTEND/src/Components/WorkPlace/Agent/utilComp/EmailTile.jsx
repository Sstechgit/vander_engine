import React from 'react'
import { formatDate } from '../../../../Utils/parseAndFormatDate'
import { mails } from '../../../../../links';

export default function EmailTile({body,time,from,origin}) {
    const extractRepliedText = (emailText) => {

        // Regex pattern to identify the start of the quoted text based on the structure you provided
        const pattern = /On\s+[^\n]+\s+wrote:\s+/i;
      
        // Find the position where the quoted text starts
        const index = emailText.search(pattern);
      
        if (index !== -1) {
          // Extract text before the quoted part
          return emailText.substring(0, index).trim();
        }
      
        // If the pattern is not found, return the original text
        return emailText.trim();
      };
  return (
    <div className='max-w-[90%]  p-4 border-b-2 border-black w-fit text-wrap' style={{alignSelf:(from==mails[origin]?"end":"start"),backgroundColor:(from==mails[origin])?"#ff6c003d":"rgb(151 211 255 / 34%)"}}>
        <p>{extractRepliedText(body,new Date(time))}</p>
        <p className='text-sm italic text-right'>{formatDate(new Date(time))}</p>
    </div>
  )
}
