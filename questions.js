questions =  [
    {"id": 0, "question": "Corporations should be a dominant ruling force.", "effects": {"cap": 2}},
    {"id": 1, "question": "Inheritance is a legitimate form of wealth.", "effects": {"cap": 1}},
    {"id": 2, "question": "Capitalism is the most successful and beneficial economic system yet.", "effects": {"cap": 1}},
    {"id": 3, "question": "The means of production should belong to the workers.", "effects": {"cap": -1}},
    {"id": 4, "question": "Basic utilities like roads and electricity should be publicly owned.", "effects": {"cap": -1}},
    {"id": 5, "question": "A community should suffer the gains and loss toghether.", "effects": {"cap": -1}},
    {"id": 6, "question": "A strong and large government is the best for society.", "effects": {"auth": 1}},
    {"id": 7, "question": "Even when protesting an authoritarian government, violence cannot be accepted.", "effects": {"auth": 1}},
    {"id": 8, "question": "Law and Order is more important than freedom and liberty.", "effects": {"auth": 1}},    
    {"id": 9, "question": "If a state exists, its size should be minimized.", "effects": {"auth": -1}},
    {"id": 10, "question": "The government should stay out of people's daily lives.", "effects": {"auth": -1}},
    {"id": 11, "question": "The existence of the state itself is a threat to our liberty.", "effects": {"auth": -1}},
    {"id": 12, "question": "Autocracy is better than Liberal Democracy.", "effects": {"auth": 1}},
    {"id": 12, "question": "It's important to prioritize our nation's interests over the rest of the world.", "effects": {"nat": 1}},
    {"id": 13, "question": "My nation is great.", "effects": {"nat": 1}},
    {"id": 14, "question": "Wars do not need to be justified towards other countries.", "effects": {"nat": 1}},
    {"id": 15, "question": "Nationalism is a selfish and evil ideology.", "effects": {"nat": -1}},
    {"id": 16, "question": "We should try to avoid wars and conflicts as much as possible.", "effects": {"nat": -1}},
    {"id": 17, "question": "A global country will be great for humanity.", "effects": {"nat": -1}},
    {"id": 18, "question": "Maintaining culture is very important.", "effects": {"trad": 1}},
    {"id": 19, "question": "We should maintain traditional values as much as possible.", "effects": {"trad": 1}},
    {"id": 20, "question": "We should not chase progress.", "effects": {"trad": 1}},
    {"id": 21, "question": "Society should be changed or reformed.", "effects": {"trad": -1}},
    {"id": 22, "question": "I support the LGBT community.", "effects": {"trad": -1}},
    {"id": 23, "question": "Progression is vital to human society.", "effects": {"trad": -1}},
    {"id": 24, "question": "The progression of technology has mostly been beneficial.", "effects": {"acc": 1}},
    {"id": 25, "question": "Developing advanced technology is the best way to solve climate change.", "effects": {"acc": 1}},
    {"id": 26, "question": "Life is harder and generally worse than it is a few decades ago.", "effects": {"acc": -1}},
    {"id": 27, "question": "Technological development should be slowed down.", "effects": {"acc": -1}},
    {"id": 28, "question": "Letting technology develop too much is very dangerous.", "effects": {"acc": -1}},
    {"id": 29, "question": "A God or a higher being exists.", "effects": {"relig": 1}},
    {"id": 30, "question": "My religion should be spread as much as possible.", "effects": {"relig": 1}},
    {"id": 31, "question": "I consider myself religious.", "effects": {"relig": 1}},
    {"id": 32, "question": "A religious government should be put in place.", "effects": {"relig": 1}},
    {"id": 33, "question": "Churches or other religious organization should be taxed as much as other organizations are.", "effects": {"relig": -1}},
    {"id": 34, "question": "My political ideas are fundementally different from the status quo.", "effects": {"rad": 1}},
    {"id": 35, "question": "A certain amount of violence is required in order to establish my ideology.", "effects": {"rad": 1}},
    {"id": 36, "question": "My ideology is 'mainstream'.", "effects": {"rad": -1}},
    {"id": 37, "question": "My political ideas can be established through small reforms.", "effects": {"rad": -1}},
    {"id": 38, "question": "Protests should be as peaceful as possible.", "effects": {"nonv": 1}},
    {"id": 39, "question": "Agression brings more negatives than positive.", "effects": {"nonv": 1}},
    {"id": 40, "question": "Violence is sometimes unavoidable in order to acheive real change.", "effects": {"nonv": -1}},
    {"id": 41, "question": "Experts and intellegent people should rule this country.", "effects": {"noo": 1}},
    {"id": 42, "question": "Democracy is unstable and easily corruptable.", "effects": {"noo": 1}},
    {"id": 43, "question": "Being suitable is more important than being popular for a leader.", "effects": {"noo": 1}},
    {"id": 44, "question": "Democracy is the least worse systsem of government.", "effects": {"noo": -1}},
    {"id": 45, "question": "If computers become smarter than humans, computers should rule.", "effects": {"noo": 1}},
    {"id": 46, "question": "Kakistocracy is a good system.", "effects": {"noo": -1}},
    {"id": 47, "question": "If a ruling body exists, it should be chosen by the people.", "effects": {"const": -1}},
    {"id": 48, "question": "A representative democracy is preferable to a direct democracy.", "effects": {"const": 1}},
    {"id": 49, "question": "Strong leaderships maximizes the effiency of a nation.", "effects": {"const": 1}},
    {"id": 50, "question": "The best ideology is different for every nation.", "effects": {"inter": -1}},
    {"id": 51, "question": "Tyrannical governments should be toppled.", "effects": {"inter": -1}},
    {"id": 52, "question": "Intervention is generally beneficial.", "effects": {"inter": 1}},
    {"id": 53, "question": "Globalization is inevitable, and it nust be embraced.", "effects": {"inter": 1}},
    {"id": 54, "question": "If certain people migrated into our countries, it's important for them to assimilate into our culture.", "effects": {"assi": 1}},
    {"id": 55, "question": "Each ethnicity should stay in their own communities.", "effects": {"assi": 1}},
    {"id": 56, "question": "It's important to be diverse at all times.", "effects": {"assi": -1}},
    {"id": 57, "question": "Race and ethnicity shouldn't matter.", "effects": {"assi": -1}},
    {"id": 58, "question": "Staying realistic is very important.", "effects": {"prag": 1}},
    {"id": 59, "question": "Extraordinary claims require extraordinary evidence.", "effects": {"prag": 1}},
    {"id": 60, "question": "We need to be more open towards radical ideas.", "effects": {"prag": -1}},
    {"id": 61, "question": "We should strive towards a utopian society.", "effects": {"prag": -1}},
    {"id": 62, "question": "Selfishness is a negative trait.", "effects": {"prud": 1}},
    {"id": 63, "question": "Working for the community is more important than finding happiness.", "effects": {"prud": 1}},
    {"id": 64, "question": "Everybody should be able to do what ever they want to do.", "effects": {"prud": -1}},
    {"id": 65, "question": "The most meaningful times spent are times when you do things in your own interest.", "effects": {"prud": -1}},
    {"id": 66, "question": "The freedom of businesses is the best way society can prosper.", "effects": {"free": 1}},
    {"id": 67, "question": "Economic regulation often brings more bad than good.", "effects": {"free": 1}},
    {"id": 68, "question": "The freedom of businesses is the best way society can prosper.", "effects": {"free": 1}},
    {"id": 69, "question": "The market regulates itself if the government steps away from the economy.", "effects": {"free": 1}},
    {"id": 70, "question": "It is necessary for the government to intervene in the economy to protect consumers.", "effects": {"free": 1}},
    {"id": 71, "question": "If corporations exist, they should mostly be state-owned.", "effects": {"free": 1}},
    {"id": 72, "question": "Children should always listen to their parents.", "effects": {"pat": 1}},
    {"id": 73, "question": "Having a minimum age for a job is crucial.", "effects": {"pat": 1}},
    {"id": 74, "question": "Older people often have more experience and knowledge.", "effects": {"pat": 1}},
    {"id": 75, "question": "If a child voluntary chooses to work, they should be allowed to work.", "effects": {"pat": 1}},
    {"id": 76, "question": "Young people are currently too excluded from many things.", "effects": {"pat": 1}},
    {"id": 77, "question": "Society doesn't need to be organized.", "effects": {"unru": 1}},
    {"id": 78, "question": "The current law system is too strict and absolute.", "effects": {"unru": 1}},
    {"id": 79, "question": "Without an organized system, society will be messy and chaotic.", "effects": {"unru": -1}},
    {"id": 80, "question": "Being organized is a positive trait.", "effects": {"unru": -1}},
    {"id": 81, "question": "Everybody should stay disciplined in most cases.", "effects": {"unru": -1}},
    {"id": 82, "question": "I have done many wrong things in th past.", "effects": {"imp": 1}},
    {"id": 83, "question": "I have broken the law before.", "effects": {"imp": 1}},
    {"id": 84, "question": "I am not perfect.", "effects": {"imp": 1}},
    {"id": 85, "question": "I am seen as a selfless and kind person by other people.", "effects": {"imp": -1}},
    {"id": 86, "question": "I often find myself hating other people.", "effects": {"imp": 1}},
    {"id": 87, "question": "Local governments can understand their citizens better than the national government could.", "effects": {"dec": 1}},
    {"id": 88, "question": "Laws should vary from area to area and culture to culture within a country.", "effects": {"dec": 1}},
    {"id": 89, "question": "A federal state is better than a unitary state.", "effects": {"dec": 1}},
    {"id": 90, "question": "Subdivisions should not be able to exempt from national laws.", "effects": {"dec": -1}},
    {"id": 91, "question": "The national government protects minorities better than some local governments do.", "effects": {"dec": -1}},
    {"id": 92, "question": "Most things can only be accomplished through a group.", "effects": {"nih": -1}},
    {"id": 93, "question": "If the current career system is being used, a person's personal and work life should stay seperate.", "effects": {"nih": 1}},
    {"id": 94, "question": "Being self-sufficient (as a person) is a positive trait.", "effects": {"nih": 1}},
];
