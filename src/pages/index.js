import { useState, useEffect } from "react";

export default function Home() {
  const jokes = [
    `• What do you call a pony with a cough?
A little horse.`,

    `• What did one hat say to the other?
You wait here. I’ll go on a head.`,

    `• What do you call a magic dog?
A labracadabrador.`,

    `• What did the shark say when he ate the clownfish?
This tastes a little funny.`,

    `• What’s orange and sounds like a carrot?
A parrot.`,

    `• Why can’t you hear a pterodactyl go to the bathroom?
Because the “P” is silent.`,

    `• What do you call a woman with one leg?
Eileen.`,

    `• What did the pirate say when he turned 80?
Aye matey.`,

    `• Why did the frog take the bus to work today?
His car got toad away.`,

    `• What did the buffalo say when his son left for college?
Bison.`,

    `• What is an astronaut’s favorite part on a computer?
The space bar.`,

    `• Why did the yogurt go to the art exhibition?
Because it was cultured.`,

    `• What do you call an apology written in dots and dashes?
Re-Morse code.`,

    `• Did you hear about the two people who stole a calendar?
They each got six months.`,

    `• Why did the hipster burn his mouth?
He drank the coffee before it was cool`,

    `• What do cows do on date night?
Go to the moo-vies.`,

    `• What do cows say when they hear a bad joke?
“I am not amoosed.”`,

    `• Why do French people eat snails?
They don’t like fast food.`,

    `• Why did the golfer wear two pairs of pants? 
Just in case he got a hole in one!`,

    `• Why don’t the circus lions eat the clowns? 
Because they taste funny!`,

    `• How many tickles does it take to make an octopus laugh?
Ten-tickles.`,

    `• What did 0 say to 8?
“Nice belt.”`,

    `• What do you call a pig that does karate?
A pork chop.`,

    `• What did the football coach say to the broken vending machine?
Give me my quarterback.`,

    `• Why are elephants wrinkly?
Because you can’t iron them.`,

    `• What did the cake say to the fork?
You want a piece of me?`,

    `• Why did the strawberry cry?
He found himself in a jam.`,

    `• Why is it annoying to eat next to basketball players?
They dribble all the time.`,

    `• What did the lettuce say to the celery?
Quit stalking me!`,

    `• What do you call a train carrying bubblegum?
A chew-chew train.`,

    `• What’s small and red and has a rough voice?
A hoarse radish!`,

    `• Why do mushrooms get invited to all the parties?
Because they are such fungis.`,

    `• Why shouldn’t you tell secrets in a cornfield?
Too many ears.`,

    `• Why couldn’t the bad sailor learn the alphabet?
Because he always got lost at “C.”`,

    `• How did the two cats end their fight?
They hissed and made up.`,

    `• “Did you hear about the guy who invented the knock-knock joke?
He won the ‘no-bell’ prize.”`,

    `• What’s the best thing about Switzerland?
I don’t know, but the flag is a big plus.`,

    `• Why do we tell actors to “break a leg”?
Because every play has a cast.`,

    `• Helvetica and Times New Roman walk into a bar.
“Get out of here!” shouts the bartender. “We don’`,

    `• Hear about the new restaurant called Karma?
There’s no menu: You get what you deserve.`,

    `• A woman in labor suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!”
“Don’t worry,” said the doc. “Those are just contractions.”`,

    `• A bear walks into a bar and says, “Give me a whiskey and … cola.” “Why the big pause?” asks the bartender.
The bear shrugged. “I’m not sure; I was born with them.”`,

    `• Why don’t scientists trust atoms?
Because they make up everything.`,

    `• Where are average things manufactured?
The satisfactory.`,

    `• How do you drown a hipster?
Throw him in the mainstream.`,

    `• What sits at the bottom of the sea and twitches?
A nervous wreck.`,

    `• What does a nosy pepper do?
Gets jalapeño business!`,

    `• How does Moses make tea?
He brews.`,

    `• Why can’t you explain puns to kleptomaniacs?
They always take things literally.`,

    `• How do you keep a bagel from getting away?
Put lox on it.`,

    `• Why did the chicken go to the séance?
To get to the other side.`,

    `• Did you hear about the mathematician who’s afraid of negative numbers?
He’ll stop at nothing to avoid them.`,

    `• Yesterday I saw a guy spill all his Scrabble letters on the road.
I asked him, “What’s the word on the street?”`,

    `• I invented a new word!
“Plagiarism!”`,

    `• Did you hear about the actor who fell through the floorboards?
He was just going through a stage.`,

    `• Did you hear about the claustrophobic astronaut?
He just needed a little space.`,

    `• Why did the Oreo go to the dentist?
Because he lost his filling.`,

    `• Where does Batman go to the bathroom?
The batroom.`,

    `• Where does the sheep get his hair cut?
The baa-baa shop!`,

    `• Why are ghosts such bad liars?
Because they are easy to see thro`,

    `• Why does Humpty Dumpty love autumn?
Because Humpty Dumpty had a great fall`,

    `• How do trees get online?
They just log on!`,

    `• What do you call a bear with no teeth?
A gummy bear.`,

    `• Why couldn’t the leopard play hide-and-seek?
Because he was always spotted.`,

    `• Why do bees have sticky hair?
Because they use honeycombs.`,

    `• Where do fish sleep?
In the riverbed.`,

    `• What do you call an alligator in a vest?
An investigator.`,

    `• I hate Russian dolls—
They’re so full of thems`,

    `• Knock, knock!
Who’s there?

Alice.

Alice who?

Alice fair in love and war.`,

    `• Knock, knock!
Who’s there?

A pile-up.

A pile-up who?

Oh no, yuck!`,

    `• Knock, knock! 
Who’s there?

Cows go.

Cows go who?

No, cows go moo!`,

    `• Knock knock!
Who’s there?
    
Urine.
    
Urine who?
    
Urine trouble!`,

    `• Knock, knock!
Who’s there?

Figs.

Figs who?

Figs the doorbell, it’s not working!`,

    `• Knock knock!
Who’s there?

Ken.

Ken who?

Ken I come in?`,

    `• Knock, knock!
Who’s there?

Says.

Says who?

Says me!`,

    `• Knock knock!
Who’s there?

Tank.

Tank who?

You’re welcome.`,

    `• Knock, knock!
Who’s there?

Nobel.

Nobel who?

Nobel, that’s why I knocked!`,

    `• Knock, knock!
Who’s there?

Luke.

Luke who?

Luke through the peephole and find out.`,

    `• Knock, knock!
Who’s there?

Annie.

Annie who?

Annie thing you can do, I can do better!`,

    `• Knock, knock!
Who’s there?

Hal.

Hal who?

Hal will you know if you don’t open the door?`,

    `• Knock, knock!
Who’s there?

Honey bee.

Honey bee who?

Honey, bee a dear and get that for me, please!`,

    `• How do you throw a space party?
You planet.`,

    `• What’s Forest Gump’s password?
1Forest1.`,

    `• How do poets say hello?
Hey, haven’t we metaphor?`,

    `• How does a rabbi make his coffee?
Hebrews it.`,

    `• Why did the M&M go to school?
It wanted to be a Smartie.`,

    `• I try not to tell dad jokes …
But when I do, he thinks they’re`,

    `• I told my wife she was drawing her eyebrows too high.
She looked at me surprised.`,

    `• I poured root beer in a square glass.
Now I just have beer.`,

    `• Why aren’t koalas actual bears?
They don’t meet the koalafications`,

    `• RIP to boiling water.
You will be mist.`,

    `• What do you call a rooster staring at a pile of lettuce?
A chicken sees a salad.`,

    `• Why did the nurse need a red pen at work?
In case she needed to draw blood.`,

    `• The numbers 19 and 20 got into a fight.
21.`,

    `• Why did it get so hot in the baseball stadium after the game?
All the fans left.`,

    `• I’d tell you a pizza joke …
but it’s probably too cheesy.`,

    `• My girlfriend treats me like a god.
She ignores my existence and only talk`,

    `• Which building in New York has the most stories?
The public library.`,

    `• Why can’t male ants sink?
They’re buoy-ant.`,

    `• What type of sandals do frogs wear?
Open-toad!`,

    `• How does the ocean say hi?
It waves!`,

    `• What is fast, loud and crunchy?
A rocket chip.`,

    `• What do you call an ant who fights crime?
A vigilANTe!`,

    `• Two artists had an art contest.
It ended in a draw!`,

    `• What does a storm cloud wear under his raincoat?
Thunderwear.`,

    `• I tried to sue the airport for misplacing my luggage.
I lost my case.`,

    `• What’s a cat’s favorite dessert?
A bowl full of mice-cream.`,

    `• What did the policeman say to his hungry stomach?
“Freeze. You’re under a vest.”`,

    `• What social events do spiders love to attend?
Webbings.`,

    `• What did one pickle say to the other?
Dill with it. Check out these some pickle`,

    `• Why do ducks have feathers on their tails?
To cover their butt quacks.`,

    `• How does a vampire start a letter?
“Tomb it may concern …”`,

    `• How do you count cows?
With a cowculator.`,
  ];

  const [randomJoke, setRandomJoke] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setRandomJoke(jokes[randomIndex]);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">
          😂 Random Joke
        </h1>
        <p className="text-lg text-black">{randomJoke || "Loading joke..."}</p>
      </div>
    </div>
  );
}
