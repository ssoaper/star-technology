// Adds recipies for UHV singleblock machines which do not have a recipe by default.

ServerEvents.recipes(event => {
    event.shaped(Item.of('gtceu:uhv_transformer_1a'), [
        'UEE',
        'EH ',
        'UEE'
    ], {
        U: 'gtceu:uhpic_chip',
        E: 'gtceu:europium_single_cable',
        H: 'gtceu:uhv_machine_hull'
    });
})