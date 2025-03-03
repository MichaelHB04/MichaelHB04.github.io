function getMusicTitlesByYear(tracks){
    // checking whether track is an array
    if(! Array.isArray(tracks)) throw new Error('Input is not an array.');

    //cheching whether track is empty
    if(tracks.length == 0) throw new Error('Input is an empty array');
    const result = {};

    for (const track of tracks){
        //checking whether track is an object and not null
        if (typeof track !== 'object' || track === null )throw new Error('Each track should be an object');

        let year = track.year;
        let title = track.title;
        let artist = track.artist;
        
        //error handeling for year, title and artists to test if each of these things exists and is of the correct format
        if(year == undefined) throw new Error('Year was not found in tracks');
        if(typeof year !== 'number') throw new Error('Year is not a number');
        
        if(title == undefined) throw new Error('Title was not found in tracks');
        if(typeof title !== 'string') throw new Error('Title is not a string');
        
        if(artist == undefined) throw new Error('Artist was not found in tracks');
        if(typeof artist !== 'string') throw new Error('artist is not a string');
        
        //will create and initialize the year if it doesn't exist
        if (!result[year]) result[year] = [];
        
        //will push add the title to the year
        result[year].push(title);
    }

    //will sort the result object alphbetically
    for (const years in result){
        result[years].sort();
    }

    return result;

}

//Exporting the function
module.exports = {getMusicTitlesByYear}

const tracks = [
    { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
    { title: 'Levitating', artist: 'Dua Lipa', year: 2021 },
    { title: 'Save Your Tears', artist: 'The Weeknd', year: 2020 },
    {title: 'A', artist:'b', year: 2020}
  ];

console.log(getMusicTitlesByYear(tracks));