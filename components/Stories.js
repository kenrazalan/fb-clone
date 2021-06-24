import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {   
        id: 1,
        name:"kenneth Razalan",
        src: "https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v"
    },
    {
        id: 2,
        name:"jayvee Razalan",
        src: "https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk"
    },
    {
        id: 3,
        name:"carlo Razalan",
        src: "https://links.papareact.com/k2j",
        profile:"https://links.papareact.com/f0p"
    },
    {
        id: 4,
        name:"carlo Razalan",
        src: "https://links.papareact.com/k2j",
        profile:"https://links.papareact.com/f0p"
    },
    {
        id: 5,
        name:"carlo Razalan",
        src: "https://links.papareact.com/k2j",
        profile:"https://links.papareact.com/f0p"
    },
    
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoryCard name={story.name} src={story.src} profile={story.profile} key={story.id}/>
            ))}
        </div>
    )
}

export default Stories
