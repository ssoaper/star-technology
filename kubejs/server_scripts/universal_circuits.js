ServerEvents.recipes(event => {
    global.tiers.forEach(tier => {
        event.shapeless(`kubejs:${tier}_universal_circuit`)
    })

    // Fixing the conflict between universal and programmable circuit recipes
    event.replaceInput(
        { output: 'gtceu:programmable_circuit' },
        '#gtceu:circuits/lv',
        'kubejs:lv_universal_circuit'
    )
})
ServerEvents.tags('item', event => {
    global.tiers.forEach(tier => {
        event.add(`gtceu:circuits/${tier}`, `kubejs:${tier}_universal_circuit`)
    })
})