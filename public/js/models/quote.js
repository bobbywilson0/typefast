TypeFast.Quote = DS.Model.extend({
  body: DS.attr('string')
});

TypeFast.Quote.FIXTURES = [
  {
    id: 1,
    body: ["In the city of New York the summer of 1899 was signalized by the",
    "dismantling of the Elevated Railroads. The summer of 1900 will live in",
    "the memories of New York people for many a cycle; the Dodge Statue was",
    "removed in that year. In the following winter began that agitation for",
    "the repeal of the laws prohibiting suicide which bore its final fruit in",
    "the month of April, 1920, when the first Government Lethal Chamber was",
    "opened on Washington Square."].join(" ")
  },
  {
    id: 2,
    body: "Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse."
  },
  {
    id: 3,
    body: "Art is a step from what is obvious and well-known toward what is arcane and concealed."
  }
]
