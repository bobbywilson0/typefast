TypeFast.Quote = DS.Model.extend({
  body: DS.attr('string')
});

TypeFast.Quote.FIXTURES = [
  {
    id: 1,
    body: "The aim of art is to represent not the outward appearance of things, but their inward significance."
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
