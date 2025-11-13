var Airtable = require('airtable');
const dotenv = require('dotenv');
dotenv.config();

var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appfpPZsw1cEUkzQ7');

export async function getListAndPoints() {
    const rank_list = [];
    const points_list = [];

    return new Promise((resolve, reject) => {
        base('Goddess Points').select({
            view: "Grid view"
        }).eachPage(
            function page(records, fetchNextPage) {
                records.forEach(function(record) {
                    const num = record.get('Number');
                    const points = record.get('Points');
                    rank_list.push(num);
                    points_list.push(points);
                });
                fetchNextPage();
            },
            function done(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ rank_list, points_list });
                }
            }
        );
    });
}

export async function getInfoFromID(id) {
    var my_record = ""
    
    return new Promise((resolve, reject) => {
    base('Goddess Badges').select({
        view: "Grid view",
        filterByFormula: `{Slack ID} = "${id}"`
    }).eachPage(
        function page(records, fetchNextPage) {
            records.forEach(function(record) {
                my_record = record.get('Name')
            });
            fetchNextPage();
        },
        function done(err) {
            if (err) {
                reject(err);
            } else {
                resolve(my_record);
            }
        }
    );
});
}

export async function getBadgesFromID(id) {
    var my_badges = []
    
    return new Promise((resolve, reject) => {
    base('Goddess Badges').select({
        view: "Grid view",
        filterByFormula: `{Slack ID} = "${id}"`
    }).eachPage(
        function page(records, fetchNextPage) {
            records.forEach(function(record) {
                my_badges = record.get('Badges')
            });
            fetchNextPage();
        },
        function done(err) {
            if (err) {
                reject(err);
            } else {
                resolve(my_badges);
            }
        }
    );
});
}

export async function getGoddessFromID(id) {
    var my_record = ""
    
    return new Promise((resolve, reject) => {
    base('Goddess Badges').select({
        view: "Grid view",
        filterByFormula: `{Slack ID} = "${id}"`
    }).eachPage(
        function page(records, fetchNextPage) {
            records.forEach(function(record) {
                my_record = record.get('Goddess')
            });
            fetchNextPage();
        },
        function done(err) {
            if (err) {
                reject(err);
            } else {
                resolve(my_record);
            }
        }
    );
});
}

//stuff for badges
export async function BadgeFromID(id) {
    var name = ""
    var desc = ""
    var points = ""
    var source = ""
    
    const record = await base('Badges')
      .select({
        view: 'Grid view',
        filterByFormula: `{ID} = "${id}"`,
        maxRecords: 1,
      })
      .firstPage()

    const record_final = record[0]
    name = record_final.get('name')
    desc = record_final.get('desc')
    points = record_final.get('points')
    source = record_final.get('src')

    return {name: name, desc: desc, points: points, source: source};
}