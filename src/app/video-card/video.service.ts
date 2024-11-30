import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class VideoService{


    getVideos() {
        return [
            {
                title: 'Feijoada do Thiago Soares',
                description: 'Feijoada do Thiago Soares - 3 Horas de Pagode I Part. Suel, Bom Gosto, Pagode do Adame, Príncipe',
                thumbnail: 'https://i.ytimg.com/vi/rS336-oRtbY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOBNuM9hs78a9YipFhlTijb6ySDg',
                tags: ['pagode'],
                added: '15 de nov. de 2024',
                author: 'Thiago Soares',
                runtime: '03:58:05',
                views: 620.324,
                comments: 1.242,
                favorito:true,
            },
            {
                title: 'Night Traffic Hip Hop Jazz',
                description: 'Enjoy this wonderful BGM music while studying, sleeping, or whatever your heart desires...',
                thumbnail: 'https://i.ytimg.com/vi/CZI3uzodJYU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbz-vybboNqpUCsvURdPGGOviKig',
                tags: ['bgm', 'music', 'hiphop', 'jazz', 'relaxation', 'the-cat-is-not-real'],
                added: '19 days ago',
                author: 'BGMMusic',
                runtime: '1:30:21',
                views: 409032,
                comments: 120,
                favorito:false,
            },
            {
                title: 'GOTO 2018: Functional Programming in 40 Minutes',
                description: 'This presentation was recorded at GOTO Berlin 2018. #gotocon #gotober http://gotober.com Russ Olsen - Author of Getting Clojure and Eloquent Ruby, VP at Cognitect',
                thumbnail: 'https://i.ytimg.com/vi/0if71HOyVjY/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBLGWbYGkuKH33TZj6RqBwlSz38qA',
                tags: ['programming', 'goto2018', 'funtional', 'lambda'],
                added: '5 months ago',
                author: 'GOTO Conferences',
                runtime: '1:12:47',
                views: 4321,
                comments: 4,
                favorito:true,
            },
            {
                title: 'Elon Musk: Telsa Autopilot | Artificial Intelligence (AI)...',
                description: 'Elon Musk is the CEO of Tesla, SpaceX, Neuralink, and a co-founder of several other companies. This conversation is part of the Artificial Intelligence podcast. The series includes leading researchers in academia and industry, including CEO\'s and CTO\'s of automotive, robotics, AI, and technology',
                thumbnail: 'https://i.ytimg.com/vi/dEv99vxKjVI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAr7wxwbE2SJ-I1jdhtfCssC1k0YA',
                tags: ['physics', 'ai', 'computer science', 'elon musk', 'tesla', 'spacex', 'selfdriving', 'futurism'],
                added: '3 days ago',
                author: 'LexFridman',
                runtime: '43:54',
                views: 34532,
                comments: 67,
                favorito:false,
            }
        ];
    }
}