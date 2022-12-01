import { sort, search, newsList } from "./main.js";

//Example testing for search function
//test("Search function testing", () => {
//  expect(search(newsList)).toBe("I am a cool web developer");
//});

test("Checks if the sorting is correct", ()=>{
expect(sort("ascending")[0]).toBe("Buried underpants and tea bags help scientists evaluate soil");
expect(sort("ascending")[0]).not.toBe("'Nightmare' TV show 'Euphoria — health threat or high art?");
expect(sort("decending")[0]).toBe("What films should an aspiring journalist watch?");
});

