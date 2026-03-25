// Command data extracted from bot cogs
const commands = [
    // AI Commands
    {
        name: "ai",
        category: "ai",
        description: "Generate AI response with IgnitionRage personality",
        usage: "?ai <your prompt>",
        examples: ["?ai What's the weather like?", "?ai Tell me a joke"],
        permissions: "all",
        cooldown: "60s (varies by user level)"
    },
    {
        name: "mood",
        category: "admin",
        description: "Set the current AI mood (mood admins only)",
        usage: "?mood [mood]",
        examples: ["?mood chill", "?mood hype", "?mood"],
        permissions: "mood admin",
        cooldown: "none"
    },
    {
        name: "moods",
        category: "ai",
        description: "List all available AI moods",
        usage: "?moods",
        examples: ["?moods"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "ama",
        category: "admin",
        description: "Add a mood admin (Bacon_Space only)",
        usage: "?ama <username>",
        examples: ["?ama @username", "?ama username"],
        permissions: "super admin",
        cooldown: "none"
    },
    {
        name: "rma",
        category: "admin",
        description: "Remove a mood admin (Bacon_Space only)",
        usage: "?rma <username>",
        examples: ["?rma @username", "?rma username"],
        permissions: "super admin",
        cooldown: "none"
    },
    {
        name: "masters",
        category: "admin",
        description: "Show list of mood admins (Bacon_Space only)",
        usage: "?masters",
        examples: ["?masters"],
        permissions: "super admin",
        cooldown: "none"
    },
    {
        name: "checkup",
        category: "admin",
        description: "Check Ollama connection status (mods only)",
        usage: "?checkup",
        examples: ["?checkup"],
        permissions: "moderator",
        cooldown: "none"
    },
    {
        name: "delay",
        category: "utility",
        description: "Show cooldown information for the user",
        usage: "?delay",
        examples: ["?delay"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "addblock",
        category: "admin",
        description: "Add a word to the blocked words list (Bacon_Space only)",
        usage: "?addblock <word>",
        examples: ["?addblock badword"],
        permissions: "super admin",
        cooldown: "none"
    },
    {
        name: "removeblock",
        category: "admin",
        description: "Remove a word from the blocked words list (Bacon_Space only)",
        usage: "?removeblock <word>",
        examples: ["?removeblock badword"],
        permissions: "super admin",
        cooldown: "none"
    },
    {
        name: "blocklist",
        category: "admin",
        description: "Show current blocked words count (Bacon_Space only)",
        usage: "?blocklist",
        examples: ["?blocklist"],
        permissions: "super admin",
        cooldown: "none"
    },
    {
        name: "reloadblocks",
        category: "admin",
        description: "Reload blocked words from JSON file (Bacon_Space only)",
        usage: "?reloadblocks",
        examples: ["?reloadblocks"],
        permissions: "super admin",
        cooldown: "none"
    },
    {
        name: "banuser",
        category: "admin",
        description: "Ban a user from using AI (Bacon_Space only)",
        usage: "?banuser <username>",
        examples: ["?banuser username"],
        permissions: "super admin",
        cooldown: "none"
    },
    {
        name: "unbanuser",
        category: "admin",
        description: "Unban a user from using AI (Bacon_Space only)",
        usage: "?unbanuser <username>",
        examples: ["?unbanuser username"],
        permissions: "super admin",
        cooldown: "none"
    },

    // Archery Commands
    {
        name: "archery",
        category: "games",
        description: "Take a shot at the archery range!",
        usage: "?archery [distance] [power]",
        examples: ["?archery 50 medium", "?archery 25 heavy"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "practice",
        category: "games",
        description: "Free practice mode to improve your archery skills",
        usage: "?practice",
        examples: ["?practice"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "archeryinfo",
        category: "games",
        description: "Show current archery conditions and your stats",
        usage: "?archeryinfo",
        examples: ["?archeryinfo"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "archerystats",
        category: "games",
        description: "View detailed archery statistics",
        usage: "?archerystats [username]",
        examples: ["?archerystats", "?archerystats @username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "archeryleaderboard",
        category: "games",
        description: "Show top archers by different metrics",
        usage: "?archeryleaderboard",
        examples: ["?archeryleaderboard"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "equipment",
        category: "games",
        description: "View and upgrade your archery equipment",
        usage: "?equipment",
        examples: ["?equipment"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "upgrade",
        category: "games",
        description: "Upgrade your archery equipment",
        usage: "?upgrade [bow/arrows] [type]",
        examples: ["?upgrade bow hunting", "?upgrade arrows fire"],
        permissions: "all",
        cooldown: "none"
    },

    // Bite Commands
    {
        name: "bite",
        category: "fun",
        description: "Bite someone with a random message!",
        usage: "?bite [username]",
        examples: ["?bite @username", "?bite username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "bitestats",
        category: "fun",
        description: "Check bite statistics for yourself or another user",
        usage: "?bitestats [username]",
        examples: ["?bitestats", "?bitestats @username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "biteleaderboard",
        category: "fun",
        description: "Show top biters and most bitten users",
        usage: "?biteleaderboard",
        examples: ["?biteleaderboard"],
        permissions: "all",
        cooldown: "none"
    },

    // Circus Commands
    {
        name: "circus",
        category: "games",
        description: "Play today's featured circus game!",
        usage: "?circus",
        examples: ["?circus"],
        permissions: "all",
        cooldown: "1 minute"
    },
    {
        name: "circusinfo",
        category: "games",
        description: "Show today's featured circus game and rules",
        usage: "?circusinfo",
        examples: ["?circusinfo"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "circusstats",
        category: "games",
        description: "Check circus statistics for yourself or another user",
        usage: "?circusstats [username]",
        examples: ["?circusstats", "?circusstats @username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "circusleaderboard",
        category: "games",
        description: "Show top circus performers",
        usage: "?circusleaderboard",
        examples: ["?circusleaderboard"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "tickets",
        category: "economy",
        description: "Check your circus tickets balance",
        usage: "?tickets",
        examples: ["?tickets"],
        permissions: "all",
        cooldown: "none"
    },

    // Lick Commands
    {
        name: "lick",
        category: "fun",
        description: "Lick someone with a random message!",
        usage: "?lick [username]",
        examples: ["?lick @username", "?lick username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "lickstats",
        category: "fun",
        description: "Check lick statistics for yourself or another user",
        usage: "?lickstats [username]",
        examples: ["?lickstats", "?lickstats @username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "lickleaderboard",
        category: "fun",
        description: "Show the top lickers and most licked users",
        usage: "?lickleaderboard",
        examples: ["?lickleaderboard"],
        permissions: "all",
        cooldown: "none"
    },

    // Social Commands
    {
        name: "hug",
        category: "fun",
        description: "Give someone a hug",
        usage: "?hug [username]",
        examples: ["?hug @username", "?hug username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "slap",
        category: "fun",
        description: "Slap someone playfully",
        usage: "?slap [username]",
        examples: ["?slap @username", "?slap username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "poke",
        category: "fun",
        description: "Poke someone",
        usage: "?poke [username]",
        examples: ["?poke @username", "?poke username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "lick",
        category: "fun",
        description: "Lick someone (weird but fun!)",
        usage: "?lick [username]",
        examples: ["?lick @username", "?lick username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "fistbump",
        category: "fun",
        description: "Give someone a fist bump",
        usage: "?fistbump [username]",
        examples: ["?fistbump @username", "?fistbump username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "bonk",
        category: "fun",
        description: "Bonk someone on the head",
        usage: "?bonk [username]",
        examples: ["?bonk @username", "?bonk username"],
        permissions: "all",
        cooldown: "none"
    },

    // Gambling Commands
    {
        name: "slots",
        category: "games",
        description: "Play the slot machine",
        usage: "?slots [amount]",
        examples: ["?slots 10", "?slots 50"],
        aliases: ["slot", "Slots", "Slot", "spin"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "slotodds",
        category: "games",
        description: "Show slot machine odds",
        usage: "?slotodds",
        examples: ["?slotodds"],
        aliases: ["odds"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "roulette",
        category: "games",
        description: "Start a roulette game",
        usage: "?roulette",
        examples: ["?roulette"],
        aliases: ["r"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "bet",
        category: "games",
        description: "Place a bet in roulette",
        usage: "?bet <amount> <bet_type>",
        examples: ["?bet 10 red", "?bet 25 black", "?bet 5 green"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "bets",
        category: "games",
        description: "Show current roulette bets",
        usage: "?bets",
        examples: ["?bets"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "blackjack",
        category: "games",
        description: "Play blackjack",
        usage: "?blackjack [amount]",
        examples: ["?blackjack 10", "?blackjack 50"],
        aliases: ["bj"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "bjall",
        category: "games",
        description: "Go all-in with all available crayons",
        usage: "?bjall",
        examples: ["?bjall"],
        aliases: ["blackjackall", "allin", "yolo"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "hit",
        category: "games",
        description: "Hit in blackjack (draw another card)",
        usage: "?hit",
        examples: ["?hit"],
        aliases: ["hitme"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "stand",
        category: "games",
        description: "Stand in blackjack (keep current hand)",
        usage: "?stand",
        examples: ["?stand"],
        aliases: ["stay"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "gamestatus",
        category: "games",
        description: "Show current game status",
        usage: "?gamestatus",
        examples: ["?gamestatus"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "poker",
        category: "games",
        description: "Play poker",
        usage: "?poker [amount]",
        examples: ["?poker 10", "?poker 50"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "roll",
        category: "games",
        description: "Roll dice",
        usage: "?roll [sides]",
        examples: ["?roll 6", "?roll 20"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "gamble",
        category: "games",
        description: "Gamble with custom chance",
        usage: "?gamble <amount> [chance%]",
        examples: ["?gamble 100", "?gamble 50 25"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "ghelp",
        category: "games",
        description: "Help command for gambling",
        usage: "?ghelp",
        examples: ["?ghelp"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "pool",
        category: "games",
        description: "Fish for emotes in the pool",
        usage: "?pool [bet] [pulls]",
        examples: ["?pool 10", "?pool 5 3"],
        aliases: ["pull"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "poolinfo",
        category: "games",
        description: "Show pool fishing information",
        usage: "?poolinfo",
        examples: ["?poolinfo"],
        aliases: ["poolhelp"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "poolrates",
        category: "games",
        description: "Show pool emote rarity rates",
        usage: "?poolrates [rarity]",
        examples: ["?poolrates", "?poolrates legendary"],
        aliases: ["rates"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "jackpot",
        category: "games",
        description: "Show jackpot information",
        usage: "?jackpot",
        examples: ["?jackpot"],
        aliases: ["legendary"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "flip",
        category: "games",
        description: "Flip a coin - Heads or Tails",
        usage: "?flip",
        examples: ["?flip"],
        permissions: "all",
        cooldown: "90s"
    },
    {
        name: "plinko",
        category: "games",
        description: "Play plinko",
        usage: "?plinko [amount]",
        examples: ["?plinko 10", "?plinko 50"],
        permissions: "all",
        cooldown: "none"
    },

    // Economy Commands
    {
        name: "crayons",
        category: "economy",
        description: "Quick way to check crayon balance",
        usage: "?crayons [username]",
        examples: ["?crayons", "?crayons @username"],
        aliases: ["Crayons", "bal"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "claim",
        category: "economy",
        description: "Claim your daily bonus of 1000 crayons",
        usage: "?claim",
        examples: ["?claim"],
        aliases: ["daily"],
        permissions: "all",
        cooldown: "24 hours"
    },
    {
        name: "bonus",
        category: "economy",
        description: "Give crayons to another user (mods only)",
        usage: "?bonus <username> <amount>",
        examples: ["?bonus @username 100", "?bonus username 50"],
        permissions: "moderator",
        cooldown: "none"
    },
    {
        name: "stats",
        category: "economy",
        description: "View your or another user's statistics",
        usage: "?stats [username]",
        examples: ["?stats", "?stats @username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "top",
        category: "economy",
        description: "Show top players by crayon count",
        usage: "?top [limit]",
        examples: ["?top", "?top 10"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "bstats",
        category: "economy",
        description: "Show overall bot statistics",
        usage: "?bstats",
        examples: ["?bstats"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "convert",
        category: "utility",
        description: "Convert money between currencies",
        usage: "?convert <amount> [from] [to]",
        examples: ["?convert 100 CAD USD", "?convert 50"],
        aliases: ["money", "currency", "exchange"],
        permissions: "all",
        cooldown: "3 per minute"
    },
    {
        name: "cad",
        category: "utility",
        description: "Convert CAD to USD",
        usage: "?cad <amount>",
        examples: ["?cad 100"],
        permissions: "all",
        cooldown: "3 per minute"
    },
    {
        name: "usd",
        category: "utility",
        description: "Convert USD to CAD",
        usage: "?usd <amount> [target]",
        examples: ["?usd 100", "?usd 50 EUR"],
        permissions: "all",
        cooldown: "3 per minute"
    },
    {
        name: "currencies",
        category: "utility",
        description: "List some popular supported currencies",
        usage: "?currencies",
        examples: ["?currencies"],
        aliases: ["currencylist"],
        permissions: "all",
        cooldown: "2 minutes per channel"
    },
    {
        name: "rates",
        category: "utility",
        description: "Show exchange rates for a base currency",
        usage: "?rates [base]",
        examples: ["?rates", "?rates USD"],
        aliases: ["exchangerates"],
        permissions: "all",
        cooldown: "3 minutes per channel"
    },
    {
        name: "steam",
        category: "utility",
        description: "Get Steam store link for a game",
        usage: "?steam [game_name]",
        examples: ["?steam Counter-Strike", "?steam"],
        permissions: "all",
        cooldown: "none"
    },

    // Utility Commands
    {
        name: "help",
        category: "utility",
        description: "Show help information",
        usage: "?help [command]",
        examples: ["?help", "?help slots"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "ping",
        category: "utility",
        description: "Check bot latency",
        usage: "?ping",
        examples: ["?ping"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "uptime",
        category: "utility",
        description: "Check bot uptime",
        usage: "?uptime",
        examples: ["?uptime"],
        permissions: "all",
        cooldown: "none"
    },

    // Quest Commands
    {
        name: "quest",
        category: "games",
        description: "View and complete quests",
        usage: "?quest [action]",
        examples: ["?quest", "?quest daily", "?quest complete"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "quests",
        category: "games",
        description: "List all available quests",
        usage: "?quests",
        examples: ["?quests"],
        permissions: "all",
        cooldown: "none"
    },

    // Detective Commands
    {
        name: "detective",
        category: "games",
        description: "Solve mysteries and cases!",
        usage: "?detective",
        examples: ["?detective"],
        permissions: "all",
        cooldown: "none"
    },

    // Additional Fun Commands
    {
        name: "fistbump",
        category: "fun",
        description: "Give someone a fist bump",
        usage: "?fistbump [username]",
        examples: ["?fistbump @username", "?fistbump username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "fistbumpstats",
        category: "fun",
        description: "Check fist bump statistics",
        usage: "?fistbumpstats [username]",
        examples: ["?fistbumpstats", "?fistbumpstats @username"],
        permissions: "all",
        cooldown: "none"
    },

    // Other Game Commands
    {
        name: "duel",
        category: "games",
        description: "Challenge someone to a duel",
        usage: "?duel [username] [amount]",
        examples: ["?duel @username 100", "?duel username 50"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "bowling",
        category: "games",
        description: "Play bowling",
        usage: "?bowling [amount]",
        examples: ["?bowling 10", "?bowling 50"],
        permissions: "all",
        cooldown: "none"
    },

    // Admin/System Commands
    {
        name: "reloadconfig",
        category: "admin",
        description: "Reload the bot configuration from config.json (Bacon_Space only)",
        usage: "?reloadconfig",
        examples: ["?reloadconfig"],
        permissions: "super admin",
        cooldown: "none"
    },

    // Social Commands
    {
        name: "so",
        category: "utility",
        description: "Shoutout to another streamer",
        usage: "?so [username]",
        examples: ["?so username"],
        permissions: "moderator",
        cooldown: "none"
    },

    // Content Commands
    {
        name: "joke",
        category: "fun",
        description: "Get a random joke",
        usage: "?joke",
        examples: ["?joke"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "wyr",
        category: "fun",
        description: "Would you rather question",
        usage: "?wyr",
        examples: ["?wyr"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "translate",
        category: "utility",
        description: "Translate text",
        usage: "?translate <text> [target_language]",
        examples: ["?translate hello spanish", "?translate bonjour english"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "7tv",
        category: "utility",
        description: "7TV related commands",
        usage: "?7tv [action]",
        examples: ["?7tv emotes", "?7tv info"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "live",
        category: "utility",
        description: "Check if a channel is live",
        usage: "?live [channel]",
        examples: ["?live", "?live username"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "mark",
        category: "utility",
        description: "Mark something",
        usage: "?mark [item]",
        examples: ["?mark important"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "boom",
        category: "fun",
        description: "Boom command",
        usage: "?boom",
        examples: ["?boom"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "clear",
        category: "utility",
        description: "Clear chat",
        usage: "?clear",
        examples: ["?clear"],
        permissions: "moderator",
        cooldown: "none"
    },
    {
        name: "channelmanage",
        category: "admin",
        description: "Channel management commands",
        usage: "?channelmanage [action]",
        examples: ["?channelmanage info"],
        permissions: "moderator",
        cooldown: "none"
    },
    {
        name: "reload",
        category: "admin",
        description: "Reload bot cogs",
        usage: "?reload",
        examples: ["?reload"],
        permissions: "admin",
        cooldown: "none"
    },
    {
        name: "game",
        category: "utility",
        description: "Game information",
        usage: "?game",
        examples: ["?game"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "ir",
        category: "fun",
        description: "IgnitionRage specific command",
        usage: "?ir",
        examples: ["?ir"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "gamble",
        category: "games",
        description: "General gambling command",
        usage: "?gamble [amount]",
        examples: ["?gamble 10", "?gamble 50"],
        permissions: "all",
        cooldown: "none"
    },
    {
        name: "pool",
                            cooldown: "none"
},
{
    name: "pool",
        category: "games",
            description: "Play pool",
                usage: "?pool [action]",
                    examples: ["?pool", "?pool shoot"],
                        permissions: "all",
                            cooldown: "none"
},
{
    name: "bowling",
        category: "games",
            description: "Play bowling",
                usage: "?bowling [action]",
                    examples: ["?bowling", "?bowling roll"],
                        permissions: "all",
                            cooldown: "none"
},

// Admin Commands
{
    name: "reload",
        category: "admin",
            description: "Reload bot cogs (admin only)",
                usage: "?reload [cog]",
                    examples: ["?reload", "?reload ai"],
                        permissions: "admin",
                            cooldown: "none"
},
{
    name: "clear",
        category: "admin",
            description: "Clear chat (moderator only)",
                usage: "?clear",
                    examples: ["?clear"],
                        permissions: "moderator",
                            cooldown: "none"
},

// Stream Commands
{
    name: "live",
        category: "utility",
            description: "Check if stream is live",
                usage: "?live [channel]",
                    examples: ["?live", "?live channelname"],
                        permissions: "all",
                            cooldown: "none"
},
{
    name: "so",
        category: "utility",
            description: "Shoutout another channel",
                usage: "?so [channel]",
                    examples: ["?so channelname"],
                        permissions: "all",
                            cooldown: "none"
},

// Other Commands
{
    name: "joke",
        category: "fun",
            description: "Get a random joke",
                usage: "?joke",
                    examples: ["?joke"],
                        permissions: "all",
                            cooldown: "none"
},
{
    name: "translate",
        category: "utility",
            description: "Translate text",
                usage: "?translate [text]",
                    examples: ["?translate hello world"],
                        permissions: "all",
                            cooldown: "none"
},
{
    name: "wyr",
        category: "fun",
            description: "Would you rather question",
                usage: "?wyr",
                    examples: ["?wyr"],
                        permissions: "all",
                            cooldown: "none"
},
{
    name: "steam",
        category: "utility",
            description: "Get Steam game information",
                usage: "?steam [game]",
                    examples: ["?steam valorant", "?steam minecraft"],
                        permissions: "all",
                            cooldown: "none"
},
{
    name: "7tv",
        category: "utility",
            description: "Get 7TV emote information",
                usage: "?7tv [emote]",
                    examples: ["?7tv pepe", "?7tv pog"],
                        permissions: "all",
                            cooldown: "none"
},
{
    name: "info",
        category: "utility",
            description: "Get information about the bot",
                usage: "?info",
                    examples: ["?info"],
                        permissions: "all",
                            cooldown: "none"
},
{
    name: "mark",
        category: "utility",
            description: "Mark something for later",
                usage: "?mark [text]",
                    examples: ["?mark remember this"],
                        permissions: "all",
                            cooldown: "none"
},
{
    name: "ir",
        category: "utility",
            description: "IgnitionRage specific command",
                usage: "?ir [action]",
                    examples: ["?ir status", "?ir hello"],
                        permissions: "all",
                            cooldown: "none"
}
];

// Update command statistics
function updateCommandStats() {
    const commandCount = commands.length;
    const categories = new Set(commands.map(cmd => cmd.category));
    const categoryCount = categories.size;

    // Count commands per category
    const categoryCounts = {};
    commands.forEach(cmd => {
        categoryCounts[cmd.category] = (categoryCounts[cmd.category] || 0) + 1;
    });

    // Update the main stats
    const commandCountElement = document.getElementById('commandCount');
    const categoryCountElement = document.getElementById('categoryCount');

    if (commandCountElement) {
        commandCountElement.textContent = commandCount;
    }

    if (categoryCountElement) {
        categoryCountElement.textContent = categoryCount;
    }

    // Update category tabs with counts
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        const category = tab.dataset.category;
        if (category === 'all') {
            tab.textContent = `All Commands (${commandCount})`;
        } else if (categoryCounts[category]) {
            // Capitalize first letter of category
            const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
            tab.textContent = `${categoryName} (${categoryCounts[category]})`;
        }
    });

    console.log(`Updated stats: ${commandCount} commands in ${categoryCount} categories`);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    initializeParticles();
    updateCommandStats();
    renderCommands('all');
    setupEventListeners();
    setupNavigation();
});

// Create floating particles
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size
        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random color (fire themed)
        const colors = ['#ff4500', '#ff7b00', '#ffcc00', '#aa4203'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random animation delay
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';

        particlesContainer.appendChild(particle);
    }
}

// Render commands based on category
function renderCommands(category = 'all') {
    const commandsGrid = document.getElementById('commandsGrid');
    commandsGrid.innerHTML = '';

    const filteredCommands = category === 'all'
        ? commands
        : commands.filter(cmd => cmd.category === category);

    filteredCommands.forEach(command => {
        const commandCard = createCommandCard(command);
        commandsGrid.appendChild(commandCard);
    });

    if (filteredCommands.length === 0) {
        commandsGrid.innerHTML = '<p style="text-align: center; color: var(--fire-yellow);">No commands found in this category.</p>';
    }
}

// Create command card element
function createCommandCard(command) {
    const card = document.createElement('div');
    card.className = 'command-card';
    card.dataset.category = command.category;
    card.dataset.name = command.name.toLowerCase();

    const categoryColors = {
        ai: 'var(--fire-red)',
        games: 'var(--fire-orange)',
        economy: 'var(--fire-yellow)',
        fun: '#ff69b4',
        utility: '#4169e1',
        admin: '#8b008b'
    };

    card.innerHTML = `
        <div class="command-header">
            <div class="command-name">?${command.name}</div>
            <div class="command-category" style="background: ${categoryColors[command.category] || 'var(--fire-red)'}">
                ${command.category.toUpperCase()}
            </div>
        </div>
        <div class="command-description">${command.description}</div>
        <div class="command-usage">${command.usage}</div>
        <div class="command-examples">
            <strong>Examples:</strong>
            ${command.examples.map(example => `<div class="command-example">${example}</div>`).join('')}
        </div>
        <div style="margin-top: 1rem; font-size: 0.9rem; color: rgba(255,255,255,0.6);">
            <strong>Permissions:</strong> ${command.permissions} | 
            <strong>Cooldown:</strong> ${command.cooldown}
        </div>
    `;

    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            // Render commands for selected category
            renderCommands(this.dataset.category);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('commandSearch');
    const clearButton = document.getElementById('clearSearch');

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        filterCommands(searchTerm);
    });

    clearButton.addEventListener('click', function () {
        searchInput.value = '';
        renderCommands(getCurrentCategory());
    });

    // Category cards click handlers
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function () {
            const category = this.dataset.category;
            // Switch to commands section
            document.getElementById('commands').scrollIntoView({ behavior: 'smooth' });
            // Activate the corresponding tab
            const targetTab = document.querySelector(`.category-tab[data-category="${category}"]`);
            if (targetTab) {
                document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                targetTab.classList.add('active');
                renderCommands(category);
            }
        });
    });
}

// Filter commands based on search term
function filterCommands(searchTerm) {
    const commandCards = document.querySelectorAll('.command-card');

    commandCards.forEach(card => {
        const name = card.dataset.name;
        const description = card.querySelector('.command-description').textContent.toLowerCase();
        const usage = card.querySelector('.command-usage').textContent.toLowerCase();

        const matchesSearch = name.includes(searchTerm) ||
            description.includes(searchTerm) ||
            usage.includes(searchTerm);

        card.style.display = matchesSearch ? 'block' : 'none';
    });
}

// Get current active category
function getCurrentCategory() {
    const activeTab = document.querySelector('.category-tab.active');
    return activeTab ? activeTab.dataset.category : 'all';
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinksContainer = document.getElementById('navLinks');

    // Handle nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');

            // Scroll to section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Close mobile menu
            navLinksContainer.classList.remove('active');
        });
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', function () {
        navLinksContainer.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!mobileToggle.contains(e.target) && !navLinksContainer.contains(e.target)) {
            navLinksContainer.classList.remove('active');
        }
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
