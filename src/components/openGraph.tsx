import React from 'react';



interface props {
    url: string,
    img: string,
    title: string,
    href: string,
    description: string
}

export const OpenGraph = ({url, href, title, description, img}: props) => {
    return (
        <div className="flex my-6">
            <a className="border shadow-lg w-96 h-42" href={href}>
                <div className="flex"> 
                    <img alt="img" className="border-r border-gray-300 w-32 h-32" src={img} />
                    <div className="flex flex-col p-4">
                        <h4 className="font-medium max-w-xs" style={{display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', width:'100%', whiteSpace: 'nowrap', maxWidth: '12rem'}}>{title}</h4>
                        <h1 className="mt-1 text-gray-400 max-w-xs" style={{display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', width:'100%', whiteSpace: 'nowrap', maxWidth: '12rem'}}>
                            {description}
                        </h1>
                        <p className="mt-2 text-green-600 max-w-xs" style={{display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', width:'100%', whiteSpace: 'nowrap', maxWidth: '12rem'}}>{url}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}