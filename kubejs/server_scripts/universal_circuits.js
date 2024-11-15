const tiers = [
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv',
    'uhv'
]

ServerEvents.recipes(event => {
    event.shapeless("kubejs:lv_universal_circuit", "gtceu:basic_electronic_circuit")
    event.shapeless("kubejs:lv_universal_circuit", "gtceu:basic_integrated_circuit")
    event.shapeless("kubejs:lv_universal_circuit", "gtceu:microchip_processor")
    tiers.forEach(tier => {
        event.shapeless(`kubejs:${tier}_universal_circuit`, `#gtceu:circuits/${tier}`)
    })

    // Fixing the conflict between universal and programmable circuit recipes
    event.replaceInput(
        { output: 'gtceu:programmable_circuit' },
        '#gtceu:circuits/lv',
        'kubejs:lv_universal_circuit'
    )
})
ServerEvents.tags('item', event => {
    tiers.forEach(tier => {
        event.add(`gtceu:circuits/${tier}`, `kubejs:${tier}_universal_circuit`)
    })
    event.add(`gtceu:circuits/lv`, `kubejs:lv_universal_circuit`)
})