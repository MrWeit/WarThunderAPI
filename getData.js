//Imports
const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');
const fs = require('file-system'); //!DELETE

//Profile data array
var profileArray = [];

//Messages like erros or something
var messages = "";

//Profile data
var data={
        "profile": {
            "name":"",
            "profile_avatar":"",
            "level":"",
            "registration_date":"",
            "kills_rank":"",
        },
        "squad": {
            "isONsquad": false,
            "name":"",
        },
        "ab":{
            "aviation":{
            },
            "ground_vehicles":{
            },
            "fleet":{
            },
        },
        "rb":{
            "aviation":{
            },
            "ground_vehicles":{
            },
            "fleet":{
            },
        },
        "sb":{
            "aviation":{
            },
            "ground_vehicles":{
            },
            "fleet":{
            },
        },
        };

const run = function (name, callback){
    //Function to parse the data to an object
    function htmlToJson(html){
        //Loads the html to the cheerio instance
        let $ = cheerio.load(html);

        //Data on selector --> #main > table > tbody > tr:nth-child(3) > td > table:nth-child(1) > tbody > tr > td:nth-child(1) > div > div.userinfo > div.community__user-rate.profile-rate > div.user-profile__stat.profile-stat.all-stat > div
        //Gets all the data on the <ul> html
        $('.profile-stat__list-row li').each(function(index, element){
            switch (index) {
                case 11:
                    data.ab["victories"] = $(this).text();
                    break;
                case 12:
                    data.ab["completed_missions"] = $(this).text();
                    break;
                case 13:
                    data.ab["victories_battles_ratio"] = $(this).text();
                    break;
                case 14:
                    data.ab["deaths"] = $(this).text();
                    break;
                case 15:
                    data.ab["lions_earned"] = $(this).text();
                    break;
                case 16:
                    data.ab["play_time"] = $(this).text();
                    break;
                case 17:
                    data.ab["air_targets_destroyed"] = $(this).text();
                    break;
                case 18:
                    data.ab["ground_targets_destroyed"] = $(this).text();
                    break;
                case 19:
                    data.ab["naval_targets_destroyed"] = $(this).text();
                    break;
                case 21:
                    data.rb["victories"] = $(this).text();
                    break;
                case 22:
                    data.rb["completed_missions"] = $(this).text();
                    break;
                case 23:
                    data.rb["victories_battles_ratio"] = $(this).text();
                    break;
                case 24:
                    data.rb["deaths"] = $(this).text();
                    break;
                case 25:
                    data.rb["lions_earned"] = $(this).text();
                    break;
                case 26:
                    data.rb["play_time"] = $(this).text();
                    break;
                case 27:
                    data.rb["air_targets_destroyed"] = $(this).text();
                    break;
                case 28:
                    data.rb["ground_targets_destroyed"] = $(this).text();
                    break;
                case 29:
                    data.rb["naval_targets_destroyed"] = $(this).text();
                    break;
                case 31:
                    data.sb["victories"] = $(this).text();
                    break;
                case 32:
                    data.sb["completed_missions"] = $(this).text();
                    break;
                case 33:
                    data.sb["victories_battles_ratio"] = $(this).text();
                    break;
                case 34:
                    data.sb["deaths"] = $(this).text();
                    break;
                case 35:
                    data.sb["lions_earned"] = $(this).text();
                    break;
                case 36:
                    data.sb["play_time"] = $(this).text();
                    break;
                case 37:
                    data.sb["air_targets_destroyed"] = $(this).text();
                    break;
                case 38:
                    data.sb["ground_targets_destroyed"] = $(this).text();
                    break;
                case 39:
                    data.sb["naval_targets_destroyed"] = $(this).text();
                    break;

                case 54:
                    data.ab.aviation["air_battles"] = $(this).text();
                    break;
                case 55:
                    data.ab.aviation["air_battles_in_fighters"] = $(this).text();
                    break;
                case 56:
                    data.ab.aviation["air_battles_in_bombers"] = $(this).text();
                    break;
                case 57:
                    data.ab.aviation["air_battles_in_attackers"] = $(this).text();
                    break;
                case 58:
                    data.ab.aviation["time_played_in_air_battles"] = $(this).text();
                    break;
                case 59:
                    data.ab.aviation["time_played_in_fighter"] = $(this).text();
                    break;
                case 60:
                    data.ab.aviation["time_played_in_bomber"] = $(this).text();
                    break;
                case 61:
                    data.ab.aviation["time_played_in_attackers"] = $(this).text();
                    break;
                case 62:
                    data.ab.aviation["total_targets_destroyed"] = $(this).text();
                    break;
                case 63:
                    data.ab.aviation["air_targets_destroyed"] = $(this).text();
                    break;
                case 64:
                    data.ab.aviation["ground_targets_destroyed"] = $(this).text();
                    break;
                case 65:
                    data.ab.aviation["naval_targets_destroyed"] = $(this).text();
                    break;
                case 67:
                    data.rb.aviation["air_battles"] = $(this).text();
                    break;
                case 68:
                    data.rb.aviation["air_battles_in_fighters"] = $(this).text();
                    break;
                case 69:
                    data.rb.aviation["air_battles_in_bombers"] = $(this).text();
                    break;
                case 70:
                    data.rb.aviation["air_battles_in_attackers"] = $(this).text();
                    break;
                case 71:
                    data.rb.aviation["time_played_in_air_battles"] = $(this).text();
                    break;
                case 72:
                    data.rb.aviation["time_played_in_fighter"] = $(this).text();
                    break;
                case 73:
                    data.rb.aviation["time_played_in_bomber"] = $(this).text();
                    break;
                case 74:
                    data.rb.aviation["time_played_in_attackers"] = $(this).text();
                    break;
                case 75:
                    data.rb.aviation["total_targets_destroyed"] = $(this).text();
                    break;
                case 76:
                    data.rb.aviation["air_targets_destroyed"] = $(this).text();
                    break;
                case 77:
                    data.rb.aviation["ground_targets_destroyed"] = $(this).text();
                    break;
                case 78:
                    data.rb.aviation["naval_targets_destroyed"] = $(this).text();
                    break;
                case 80:
                    data.sb.aviation["air_battles"] = $(this).text();
                    break;
                case 81:
                    data.sb.aviation["air_battles_in_fighters"] = $(this).text();
                    break;
                case 82:
                    data.sb.aviation["air_battles_in_bombers"] = $(this).text();
                    break;
                case 83:
                    data.sb.aviation["air_battles_in_attackers"] = $(this).text();
                    break;
                case 84:
                    data.sb.aviation["time_played_in_air_battles"] = $(this).text();
                    break;
                case 85:
                    data.sb.aviation["time_played_in_fighter"] = $(this).text();
                    break;
                case 86:
                    data.sb.aviation["time_played_in_bomber"] = $(this).text();
                    break;
                case 87:
                    data.sb.aviation["time_played_in_attackers"] = $(this).text();
                    break;
                case 88:
                    data.sb.aviation["total_targets_destroyed"] = $(this).text();
                    break;
                case 89:
                    data.sb.aviation["air_targets_destroyed"] = $(this).text();
                    break;
                case 90:
                    data.sb.aviation["ground_targets_destroyed"] = $(this).text();
                    break;
                case 91:
                    data.sb.aviation["naval_targets_destroyed"] = $(this).text();
                    break;

                case 108:
                    data.ab.ground_vehicles["ground_battles"] = $(this).text();
                    break;
                case 109:
                    data.ab.ground_vehicles["ground_battles_in_tanks"] = $(this).text();
                    break;
                case 110:
                    data.ab.ground_vehicles["ground_battles_in_spgs"] = $(this).text();
                    break;
                case 111:
                    data.ab.ground_vehicles["ground_battles_in_heavy_tanks"] = $(this).text();
                    break;
                case 112:
                    data.ab.ground_vehicles["ground_battles_in_spaa"] = $(this).text();
                    break;
                case 113:
                    data.ab.ground_vehicles["time_played_in_ground_battles"] = $(this).text();
                    break;
                case 114:
                    data.ab.ground_vehicles["tank_battle_time"] = $(this).text();
                    break;
                case 115:
                    data.ab.ground_vehicles["tank_destroyer_battle_time"] = $(this).text();
                    break;
                case 116:
                    data.ab.ground_vehicles["heavy_tank_battle_time"] = $(this).text();
                    break;
                case 117:
                    data.ab.ground_vehicles["spaa_battle_time"] = $(this).text();
                    break;
                case 118:
                    data.ab.ground_vehicles["total_targets_destroyed"] = $(this).text();
                    break;
                case 119:
                    data.ab.ground_vehicles["air_targets_destroyed"] = $(this).text();
                    break;
                case 120:
                    data.ab.ground_vehicles["ground_targets_destroyed"] = $(this).text();
                    break;
                case 121:
                    data.ab.ground_vehicles["naval_targets_destroyed"] = $(this).text();
                    break;
                case 108:
                    data.ab.ground_vehicles["ground_battles"] = $(this).text();
                    break;
                case 109:
                    data.ab.ground_vehicles["ground_battles_in_tanks"] = $(this).text();
                    break;
                case 110:
                    data.ab.ground_vehicles["ground_battles_in_spgs"] = $(this).text();
                    break;
                case 111:
                    data.ab.ground_vehicles["ground_battles_in_heavy_tanks"] = $(this).text();
                    break;
                case 112:
                    data.ab.ground_vehicles["ground_battles_in_spaa"] = $(this).text();
                    break;
                case 113:
                    data.ab.ground_vehicles["time_played_in_ground_battles"] = $(this).text();
                    break;
                case 114:
                    data.ab.ground_vehicles["tank_battle_time"] = $(this).text();
                    break;
                case 115:
                    data.ab.ground_vehicles["tank_destroyer_battle_time"] = $(this).text();
                    break;
                case 116:
                    data.ab.ground_vehicles["heavy_tank_battle_time"] = $(this).text();
                    break;
                case 117:
                    data.ab.ground_vehicles["spaa_battle_time"] = $(this).text();
                    break;
                case 118:
                    data.ab.ground_vehicles["total_targets_destroyed"] = $(this).text();
                    break;
                case 119:
                    data.ab.ground_vehicles["air_targets_destroyed"] = $(this).text();
                    break;
                case 120:
                    data.ab.ground_vehicles["ground_targets_destroyed"] = $(this).text();
                    break;
                case 121:
                    data.ab.ground_vehicles["naval_targets_destroyed"] = $(this).text();
                    break;
                case 123:
                    data.rb.ground_vehicles["ground_battles"] = $(this).text();
                    break;
                case 124:
                    data.rb.ground_vehicles["ground_battles_in_tanks"] = $(this).text();
                    break;
                case 125:
                    data.rb.ground_vehicles["ground_battles_in_spgs"] = $(this).text();
                    break;
                case 126:
                    data.rb.ground_vehicles["ground_battles_in_heavy_tanks"] = $(this).text();
                    break;
                case 127:
                    data.rb.ground_vehicles["ground_battles_in_spaa"] = $(this).text();
                    break;
                case 128:
                    data.rb.ground_vehicles["time_played_in_ground_battles"] = $(this).text();
                    break;
                case 129:
                    data.rb.ground_vehicles["tank_battle_time"] = $(this).text();
                    break;
                case 130:
                    data.rb.ground_vehicles["tank_destroyer_battle_time"] = $(this).text();
                    break;
                case 131:
                    data.rb.ground_vehicles["heavy_tank_battle_time"] = $(this).text();
                    break;
                case 132:
                    data.rb.ground_vehicles["spaa_battle_time"] = $(this).text();
                    break;
                case 133:
                    data.rb.ground_vehicles["total_targets_destroyed"] = $(this).text();
                    break;
                case 134:
                    data.rb.ground_vehicles["air_targets_destroyed"] = $(this).text();
                    break;
                case 135:
                    data.rb.ground_vehicles["ground_targets_destroyed"] = $(this).text();
                    break;
                case 136:
                    data.rb.ground_vehicles["naval_targets_destroyed"] = $(this).text();
                    break;
                case 138:
                    data.sb.ground_vehicles["ground_battles"] = $(this).text();
                    break;
                case 139:
                    data.sb.ground_vehicles["ground_battles_in_tanks"] = $(this).text();
                    break;
                case 140:
                    data.sb.ground_vehicles["ground_battles_in_spgs"] = $(this).text();
                    break;
                case 141:
                    data.sb.ground_vehicles["ground_battles_in_heavy_tanks"] = $(this).text();
                    break;
                case 142:
                    data.sb.ground_vehicles["ground_battles_in_spaa"] = $(this).text();
                    break;
                case 143:
                    data.sb.ground_vehicles["time_played_in_ground_battles"] = $(this).text();
                    break;
                case 144:
                    data.sb.ground_vehicles["tank_battle_time"] = $(this).text();
                    break;
                case 145:
                    data.sb.ground_vehicles["tank_destroyer_battle_time"] = $(this).text();
                    break;
                case 146:
                    data.sb.ground_vehicles["heavy_tank_battle_time"] = $(this).text();
                    break;
                case 147:
                    data.sb.ground_vehicles["spaa_battle_time"] = $(this).text();
                    break;
                case 148:
                    data.sb.ground_vehicles["total_targets_destroyed"] = $(this).text();
                    break;
                case 149:
                    data.sb.ground_vehicles["air_targets_destroyed"] = $(this).text();
                    break;
                case 150:
                    data.sb.ground_vehicles["ground_targets_destroyed"] = $(this).text();
                    break;
                case 151:
                    data.sb.ground_vehicles["naval_targets_destroyed"] = $(this).text();
                    break;

                case 174:
                    data.ab.fleet["naval_battles"] = $(this).text();
                    break;
                case 175:
                    data.ab.fleet["ship_battles"] = $(this).text();
                    break;
                case 176:
                    data.ab.fleet["motor_torpedo_boat_battles"] = $(this).text();
                    break;
                case 177:
                    data.ab.fleet["motor_gun_boat_battles"] = $(this).text();
                    break;
                case 178:
                    data.ab.fleet["motor_torpedo_gun_boat_battles"] = $(this).text();
                    break;
                case 179:
                    data.ab.fleet["subchaser_battles"] = $(this).text();
                    break;
                case 180:
                    data.ab.fleet["destroyer_battles"] = $(this).text();
                    break;
                case 181:
                    data.ab.fleet["naval_ferry_barge_battles"] = $(this).text();
                    break;
                case 182:
                    data.ab.fleet["time_played_naval"] = $(this).text();
                    break;
                case 183:
                    data.ab.fleet["time_played_on_ship"] = $(this).text();
                    break;
                case 184:
                    data.ab.fleet["time_played_on_motor_torpedo_boat"] = $(this).text();
                    break;
                case 185:
                    data.ab.fleet["time_played_on_motor_gun_boat"] = $(this).text();
                    break;
                case 186:
                    data.ab.fleet["time_played_on_motor_torpedo_gun_boat"] = $(this).text();
                    break;
                case 187:
                    data.ab.fleet["time_played_on_subchaser"] = $(this).text();
                    break;
                case 188:
                    data.ab.fleet["time_played_on_destroyer"] = $(this).text();
                    break;
                case 189:
                    data.ab.fleet["time_played_on_naval_ferry_barge"] = $(this).text();
                    break;
                case 190:
                    data.ab.fleet["total_targets_destroyed"] = $(this).text();
                    break;
                case 191:
                    data.ab.fleet["air_targets_destroyed"] = $(this).text();
                    break;
                case 192:
                    data.ab.fleet["ground_targets_destroyed"] = $(this).text();
                    break;
                case 193:
                    data.ab.fleet["naval_targets_destroyed"] = $(this).text();
                    break;
                case 195:
                    data.rb.fleet["naval_battles"] = $(this).text();
                    break;
                case 196:
                    data.rb.fleet["ship_battles"] = $(this).text();
                    break;
                case 197:
                    data.rb.fleet["motor_torpedo_boat_battles"] = $(this).text();
                    break;
                case 198:
                    data.rb.fleet["motor_gun_boat_battles"] = $(this).text();
                    break;
                case 199:
                    data.rb.fleet["motor_torpedo_gun_boat_battles"] = $(this).text();
                    break;
                case 200:
                    data.rb.fleet["subchaser_battles"] = $(this).text();
                    break;
                case 201:
                    data.rb.fleet["destroyer_battles"] = $(this).text();
                    break;
                case 202:
                    data.rb.fleet["naval_ferry_barge_battles"] = $(this).text();
                    break;
                case 203:
                    data.rb.fleet["time_played_naval"] = $(this).text();
                    break;
                case 204:
                    data.rb.fleet["time_played_on_ship"] = $(this).text();
                    break;
                case 205:
                    data.rb.fleet["time_played_on_motor_torpedo_boat"] = $(this).text();
                    break;
                case 206:
                    data.rb.fleet["time_played_on_motor_gun_boat"] = $(this).text();
                    break;
                case 207:
                    data.rb.fleet["time_played_on_motor_torpedo_gun_boat"] = $(this).text();
                    break;
                case 208:
                    data.rb.fleet["time_played_on_subchaser"] = $(this).text();
                    break;
                case 209:
                    data.rb.fleet["time_played_on_destroyer"] = $(this).text();
                    break;
                case 210:
                    data.rb.fleet["time_played_on_naval_ferry_barge"] = $(this).text();
                    break;
                case 211:
                    data.rb.fleet["total_targets_destroyed"] = $(this).text();
                    break;
                case 212:
                    data.rb.fleet["air_targets_destroyed"] = $(this).text();
                    break;
                case 213:
                    data.rb.fleet["ground_targets_destroyed"] = $(this).text();
                    break;
                case 214:
                    data.rb.fleet["naval_targets_destroyed"] = $(this).text();
                    break;
                case 216:
                    data.sb.fleet["naval_battles"] = $(this).text();
                    break;
                case 217:
                    data.sb.fleet["ship_battles"] = $(this).text();
                    break;
                case 218:
                    data.sb.fleet["motor_torpedo_boat_battles"] = $(this).text();
                    break;
                case 219:
                    data.sb.fleet["motor_gun_boat_battles"] = $(this).text();
                    break;
                case 220:
                    data.sb.fleet["motor_torpedo_gun_boat_battles"] = $(this).text();
                    break;
                case 221:
                    data.sb.fleet["subchaser_battles"] = $(this).text();
                    break;
                case 222:
                    data.sb.fleet["destroyer_battles"] = $(this).text();
                    break;
                case 223:
                    data.sb.fleet["naval_ferry_barge_battles"] = $(this).text();
                    break;
                case 224:
                    data.sb.fleet["time_played_naval"] = $(this).text();
                    break;
                case 225:
                    data.sb.fleet["time_played_on_ship"] = $(this).text();
                    break;
                case 226:
                    data.sb.fleet["time_played_on_motor_torpedo_boat"] = $(this).text();
                    break;
                case 227:
                    data.sb.fleet["time_played_on_motor_gun_boat"] = $(this).text();
                    break;
                case 228:
                    data.sb.fleet["time_played_on_motor_torpedo_gun_boat"] = $(this).text();
                    break;
                case 229:
                    data.sb.fleet["time_played_on_subchaser"] = $(this).text();
                    break;
                case 230:
                    data.sb.fleet["time_played_on_destroyer"] = $(this).text();
                    break;
                case 231:
                    data.sb.fleet["time_played_on_naval_ferry_barge"] = $(this).text();
                    break;
                case 232:
                    data.sb.fleet["total_targets_destroyed"] = $(this).text();
                    break;
                case 233:
                    data.sb.fleet["air_targets_destroyed"] = $(this).text();
                    break;
                case 234:
                    data.sb.fleet["ground_targets_destroyed"] = $(this).text();
                    break;
                case 235:
                    data.sb.fleet["naval_targets_destroyed"] = $(this).text();
                    break;
            }
        });

        //Data on selector --> #main > table > tbody > tr:nth-child(3) > td > table:nth-child(1) > tbody > tr > td:nth-child(1) > div > div.userinfo > div.community__user-profile.user-profile > ul > li.user-profile__data-nick
        //Gets the profile name of the player and if contains '\n' (html space) and is on the first or last position delete it
        data.profile.name = $('.user-profile__data-nick').text();
        if(data.profile.name.includes('\n') ){
            if(data.profile.name.indexOf("\n") > 1){
                data.profile.name = data.profile.name.split(" ")[0];
                if(data.profile.name.indexOf("\n") == data.profile.name.length-1){
                    data.profile.name = data.profile.name.split("\n")[0];
                }
            } else{
                data.profile.name = data.profile.name.split("\n")[1];
                if(data.profile.name.includes(" ")){
                    data.profile.name = data.profile.name.split(" ")[1];
                }
            }
        }

        //Data on selector --> #main > table > tbody > tr:nth-child(3) > td > table:nth-child(1) > tbody > tr > td:nth-child(1) > div > div.userinfo > div.community__user-profile.user-profile > ul > li.user-profile__data-regdate
        //Gets the profile registration date and remove the whitespace
        data.profile.registration_date = $('.user-profile__data-regdate').text();
        data.profile.registration_date = data.profile.registration_date.replace(/ /g,'');

        //Data on selector --> #main > table > tbody > tr:nth-child(3) > td > table:nth-child(1) > tbody > tr > td:nth-child(1) > div > div.userinfo > div.community__user-profile.user-profile > div > img
        //Gets the profile avatar url
        data.profile.profile_avatar = $('.user-profile__ava-img').attr('src');

        //Data on selector --> #main > table > tbody > tr:nth-child(3) > td > table:nth-child(1) > tbody > tr > td:nth-child(1) > div > div.userinfo > div.community__user-profile.user-profile > ul
        //Gets the level, squad name, kills ranks and puts them to a profile array, to check its lenght because the person can not be in a squad and the index changes
        $('.user-profile__data-item').each(function(index, element){
                let push = {};
                push[index] = $(this).text();
                profileArray.push(push);
        });

        //Handle the profileArray to parse the data to json
        if(profileArray.length == 3){
            data.profile.kills_rank = Object.values(profileArray[0])[0];
            data.profile.level = Object.values(profileArray[2])[0];
            data.squad.name = Object.values(profileArray[1])[0];
            data.squad.isONsquad = true;

            //Now removes the \n and whitespaces from the squad name
            if(data.squad.name.includes("\n")){
                data.squad.name = data.squad.name.replace(/ /g,'');
                data.squad.name = data.squad.name.split("\n")[1]

            //removes the whitespaces from the level
            data.profile.level = data.profile.level.replace(/ /g,'');
            }
        } else if(profileArray.length == 2){
            data.profile.kills_rank = Object.values(profileArray[0])[0];
            data.profile.level = Object.values(profileArray[1])[0];
            data.squad.isONsquad = false;

            //removes the whitespaces from the level
            data.profile.level = data.profile.level.replace(/ /g,'');
        }
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2) , 'utf-8'); //!DELETE
        callback(data, messages);
    }

    //Function to check if the user exist and if the html was the data
    function checkIfUserExist(html){
        let $ = cheerio.load(html);
        let validUser = true;

        //First checks if the user is valid
        $('h1').map(function(index, element){
            if($(element).html().includes("User information is not available")){
                messages = "User not found";
                validUser = false;
                callback(null, messages);
            }
        });

        //If user exist and the html is valid then go to htmlToJson funtion
        if(validUser == true){
            //Now checks if the data is valid
            let stat = $('.user-profile__data-nick').text();
            if(stat){
                htmlToJson(html);
            } else {
                messages ="An error as occurred while trying to retrieve the data";
                callback(null, messages);
            }
        }
    }

    //The run function that returns the data
    let url = "https://warthunder.com/en/community/userinfo/?nick=" + name
    cloudscraper.get(url).then(function(html){checkIfUserExist(html)}, console.error);
}

module.exports.run = run;
