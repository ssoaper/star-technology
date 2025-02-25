
ServerEvents.recipes(event => {

    //Multiblock Recipes
    
    event.recipes.gtceu.assembly_line('heat_chamber')
        .itemInputs('gtceu:iridium_frame', '4x #gtceu:circuits/zpm', 'gtceu:double_rhodium_plated_palladium_plate', 
                'gtceu:double_tritanium_plate', 'gtceu:zpm_field_generator', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', 
                '32x gtceu:uhpic_chip', '48x gtceu:dragonsteel_single_wire')
        .inputFluids('gtceu:hsss 6912', 'gtceu:niobium_nitride 1728')
        .itemOutputs('gtceu:heat_chamber')
        .duration(36000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line('super_heat_chamber')
            .itemInputs('gtceu:heat_chamber', '4x #gtceu:circuits/uv', 'gtceu:double_dragonsteel_plate', 
                    'gtceu:double_titanium_carbide_plate', 'gtceu:uv_field_generator', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '32x gtceu:uhpic_chip', '48x gtceu:prismalium_single_wire')
            .inputFluids('gtceu:hsse 6912', 'gtceu:niobium_titanium 1728')
            .itemOutputs('gtceu:super_pressure_heat_chamber')
            .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("gtceu:heat_chamber"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(64)
            )
            .duration(46000)
            .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line('large_rotor_machine')
            .itemInputs('gtceu:shellite_frame', '4x #gtceu:circuits/luv', 'gtceu:double_vanadium_gallium_plate', 
                    'gtceu:double_red_steel_plate', 'gtceu:luv_field_generator', '2x gtceu:luv_electric_motor', '64x gtceu:uhpic_chip', 
                    '32x gtceu:uhpic_chip', '4x gtceu:advanced_power_thruster', '4x gtceu:hssg_spring')
            .inputFluids('gtceu:soldering_alloy 3456', 'gtceu:yttrium_barium_cuprate 5184')
            .itemOutputs('gtceu:large_rotor_machine')
            .stationResearch(
        researchRecipeBuilder => researchRecipeBuilder
            .researchStack(Item.of("gtceu:long_void_rod"))
            .EUt(GTValues.VHA[GTValues.UV])
            .CWUt(64)
        )
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line('runic_engraver')
            .itemInputs('gtceu:lumium_frame', '4x #gtceu:circuits/uv', 'gtceu:double_tantalum_carbide_plate', 
                    'gtceu:double_titanium_carbide_plate', '2x gtceu:uv_field_generator', '4x gtceu:uv_emitter', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '48x gtceu:blue_alloy_screw', 'gtceu:gravi_star')
            .inputFluids('gtceu:hsse 5184', 'gtceu:hssg 5184', 'gtceu:hsss 5184')
            .itemOutputs('gtceu:runic_circuitry_assembling_station')
            .stationResearch(
        researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("kubejs:runic_wave_generator"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
            .duration(82000)
            .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line('quantum_compressor')
            .itemInputs('gtceu:melodium_frame', '3x #gtceu:circuits/uv', 'gtceu:double_trinaquadalloy_plate', 
                    'gtceu:double_trinaquadalloy_plate', '2x gtceu:uv_field_generator', '16x gtceu:uv_electric_piston', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '32x gtceu:uhpic_chip', '48x gtceu:tritanium_screw')
            .inputFluids('gtceu:hsse 5184', 'gtceu:hssg 5184', 'gtceu:hsss 5184')
            .itemOutputs('gtceu:large_quantum_compressor')
            .duration(42000)
            .EUt(GTValues.VHA[GTValues.UV]);
    
    event.recipes.gtceu.assembly_line('stargate_component_assembly')
            .itemInputs('gtceu:prismalium_frame', '4x #gtceu:circuits/uhv', '2x gtceu:uv_field_generator', '8x gtceu:gravi_star', 
                    '4x gtceu:uv_robot_arm', '4x gtceu:uv_robot_arm', '4x gtceu:uv_robot_arm', '4x gtceu:uv_robot_arm', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', 
                    '56x gtceu:stellarium_screw', '32x gtceu:melodium_single_wire')
            .inputFluids('gtceu:prismalium 36864', 'gtceu:pcb_coolant 64000', 'gtceu:osmiridium 73728')
            .itemOutputs('gtceu:stargate_component_assembly')
            .duration(128000)
            .stationResearch(
        researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("kubejs:stargate_rod"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
            )
            .EUt(GTValues.VHA[GTValues.UV]);
                
    event.recipes.gtceu.assembly_line('drackion_runic_laser_gen')
            .itemInputs('gtceu:exquisite_screret_runic_laser_source_base_gem', '2x gtceu:uv_field_generator', '4x gtceu:uv_sensor', '4x gtceu:uv_emitter', 
                '16x gtceu:energy_cluster', '16x gtceu:energy_cluster', '16x gtceu:energy_cluster','16x gtceu:energy_cluster', 
                '4x #gtceu:circuits/uhv', '16x gtceu:uv_voltage_coil', '4x gtceu:neutron_reflector', '24x gtceu:stellarium_screw',
                '64x gtceu:uhpic_wafer', '64x gtceu:uhpic_wafer', '16x gtceu:melodium_foil', '16x gtceu:prismalium_foil')
            .inputFluids('gtceu:neutronium 63000', 'gtceu:polybenzimidazole 54000', 'gtceu:naquadria 32000')
            .itemOutputs('kubejs:runic_wave_generator')
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of("gtceu:exquisite_screret_runic_laser_source_base_gem"))
                    .EUt(GTValues.VHA[GTValues.UV])
                    .CWUt(128)
            )
            .duration(64000)
            .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.assembler('laser_casing')
        .itemInputs('6x gtceu:double_stellarium_plate', 'gtceu:stellarium_frame', 'kubejs:runic_wave_generator', 'gtceu:uv_field_generator', 'gtceu:uv_emitter')
        .itemOutputs('kubejs:laser_casing')
        .duration(12000)
            .EUt(GTValues.VHA[GTValues.UV])
            .circuit(7);

    //Void Line

    event.recipes.gtceu.extractor('echo_fluid')
        .itemInputs('minecraft:echo_shard')
        .outputFluids('gtceu:echo_r 144')
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.fluid_solidifier('raw_void_ingot')
        .itemInputs('gtceu:neutronium_ingot')
        .inputFluids('gtceu:echo_r 144')
        .itemOutputs('gtceu:raw_void_ingot')
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.remove({output: 'gtceu:hot_void_ingot'});

    event.recipes.gtceu.heat_chamber('crude_to_void_ingot')
        .itemInputs('gtceu:raw_void_ingot')
        .itemOutputs('gtceu:hot_void_ingot')
        .blastFurnaceTemp(10799)
        .duration(16000)
        .EUt(GTValues.VHA[GTValues.LuV]);

    //Gate Components
    event.recipes.gtceu.assembly_line('classic_stargate_computer_core')
        .itemInputs('gtceu:stellarium_frame', '4x kubejs:computational_super_matrix', '16x gtceu:ruthenium_trinium_americium_neutronate_octal_wire', '16x gtceu:ruthenium_trinium_americium_neutronate_octal_wire',
            '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:fine_trinaquadalloy_wire', '64x gtceu:fine_trinaquadalloy_wire')
        .inputFluids('gtceu:soldering_alloy 69420', 'gtceu:sterilized_growth_medium 13500')
        .itemOutputs('kubejs:classic_stargate_computer_core')
        .duration(24000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("kubejs:abydos_coordinate_crystal"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line('crystal_interface')
            .itemInputs('kubejs:stellarium_casing', '2x gtceu:double_iridium_plate', 'gtceu:uv_voltage_coil', 
                    '4x gtceu:stellarium_hex_wire', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip')
            .inputFluids('gtceu:sodium_potassium 49000', 'gtceu:soldering_alloy 36864')
            .itemOutputs('sgjourney:crystal_interface')
            .duration(84000)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of("gtceu:uhv_16a_energy_converter"))
                    .EUt(GTValues.VHA[GTValues.UV])
                    .CWUt(144)
            )
            .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembler('clasic_dhd')
            .itemInputs('gtceu:atomic_casing', 'gtceu:computer_monitor_cover', 'gtceu:uv_field_generator', 'gtceu:uv_emitter', 'gtceu:uv_sensor', '8x gtceu:uhpic_chip', 'kubejs:runic_engraved_plating', '4x kubejs:runic_pathway_engraved_plating')
            .inputFluids('gtceu:soldering_alloy 1728')
            .itemOutputs('sgjourney:classic_dhd')
            .duration(8000)
            .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.stargate_component_assembly('classic_stargate_base_block')
        .itemInputs('sgjourney:classic_stargate_ring_block','24x kubejs:runic_pathway_engraved_plating', '16x kubejs:runic_engraved_plating','16x kubejs:stargate_rod', 'kubejs:classic_stargate_computer_core', '64x gtceu:uhpic_chip')
        .inputFluids('gtceu:soldering_alloy 12000', 'gtceu:naquadria 36000', 'gtceu:sterilized_growth_medium 8000')
        .itemOutputs('sgjourney:classic_stargate_base_block')
        .duration(48000)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.stargate_component_assembly('classic_stargate_ring_block')
            .itemInputs('gtceu:stellarium_frame', '36x gtceu:naquadah_alloy_plate', '8x kubejs:runic_pathway_engraved_plating','56x kubejs:stargate_rod', '64x gtceu:fine_trinaquadalloy_wire','64x gtceu:fine_trinaquadalloy_wire')
            .inputFluids('gtceu:soldering_alloy 12000', 'gtceu:naquadria 56000')
            .itemOutputs('sgjourney:classic_stargate_ring_block')
            .duration(20000)
            .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.stargate_component_assembly('classic_stargate_chevron_block')
        .itemInputs('sgjourney:classic_stargate_ring_block','12x kubejs:runic_pathway_engraved_plating', '8x kubejs:runic_engraved_plating','12x kubejs:stargate_rod','kubejs:classic_chevron_disk','32x gtceu:fine_stellarium_wire')
        .inputFluids('gtceu:soldering_alloy 12000', 'gtceu:naquadria 32000', 'gtceu:radon 62000')
        .itemOutputs('sgjourney:classic_stargate_chevron_block')
        .duration(32000)
        .EUt(GTValues.VHA[GTValues.UHV]);
    
    event.recipes.gtceu.assembly_line('compuation_super_matrix')
        .itemInputs('gtceu:melodium_frame', '16x #gtceu:circuits/uhv', '16x #gtceu:circuits/uhv', '16x #gtceu:circuits/uhv', 
                '16x #gtceu:circuits/uhv', '16x #gtceu:circuits/uhv', '16x #gtceu:circuits/uhv', '16x #gtceu:circuits/uhv', '48x gtceu:prismalium_screw')
        .inputFluids('gtceu:soldering_alloy 40000')
        .itemOutputs('kubejs:computational_super_matrix')
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("gtceu:wetware_processor_mainframe"))
                .EUt(GTValues.VHA[GTValues.ZPM])
                .CWUt(128)
        )
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.large_rotor_machine('crude_stargate_rod')
        .itemInputs('gtceu:long_void_rod', '64x gtceu:weapon_grade_naquadah_foil', '48x gtceu:neutronium_foil', '64x gtceu:weapon_grade_naquadah_foil', '48x gtceu:neutronium_foil', '64x gtceu:weapon_grade_naquadah_foil', '48x gtceu:neutronium_foil', '64x gtceu:weapon_grade_naquadah_foil', 'gtceu:nether_star_lens')
        .itemOutputs('kubejs:crude_stargate_rod')
        .duration(1600)
        .EUt(GTValues.VHA[GTValues.LuV]);
    
    event.recipes.gtceu.super_pressure_heat_chamber('stargate_rod')
        .itemInputs('kubejs:crude_stargate_rod')
        .itemOutputs('kubejs:stargate_rod')
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.assembly_line('classic_chevron_disk')
        .itemInputs('gtceu:prismalium_frame', 'gtceu:exquisite_naquadic_netherite_gem', '8x gtceu:wetware_processor_mainframe', '6x gtceu:uv_sensor', '6x gtceu:uv_emitter', '6x gtceu:uv_field_generator', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip')
        .inputFluids('gtceu:naquadria 48000', 'gtceu:borosilicate_glass 136000')
        .itemOutputs('kubejs:classic_chevron_disk')
        .duration(6000)
        .stationResearch(
        researchRecipeBuilder => researchRecipeBuilder
            .researchStack(Item.of("gtceu:exquisite_naquadic_netherite_gem"))
            .EUt(GTValues.VHA[GTValues.UV])
            .CWUt(144)
        )
        .EUt(GTValues.VHA[GTValues.UHV]);

        // runic plating

        const singularity_materials = ['aluminium', 'silver', 'tin', 'platinum', 'copper', 'iron', 'lead', 'nickel', 'gold'];

        singularity_materials.forEach(element => {
            event.recipes.gtceu.large_quantum_compressor(`${element}_singularity`)
                .itemInputs(`64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `32x #forge:storage_blocks/${element}`)
                .itemOutputs(Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${element}"}`))
                .duration(24000)
                .EUt(GTValues.VHA[GTValues.ZPM]);
        });
   
    event.recipes.gtceu.runic_circuitry_assembling_station('runic_count_1x')
        .itemInputs('gtceu:dense_enriched_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}').strongNBT())
        .itemOutputs('kubejs:runic_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(8000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station('runic_count_2x')
        .itemInputs('gtceu:dense_enriched_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}').strongNBT())
        .itemOutputs('2x kubejs:runic_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(8000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station('runic_count_3x')
        .itemInputs('gtceu:dense_enriched_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}').strongNBT())
        .itemOutputs('3x kubejs:runic_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(8000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station('runic_count_4x')
        .itemInputs('gtceu:dense_enriched_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}').strongNBT())
        .itemOutputs('4x kubejs:runic_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(8000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station('runic_time_1')
        .itemInputs('gtceu:dense_enriched_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}').strongNBT())
        .itemOutputs('kubejs:runic_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(7000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station('runic_time_2')
        .itemInputs('gtceu:dense_enriched_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}').strongNBT())
        .itemOutputs('kubejs:runic_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station('runic_time_3')
        .itemInputs('gtceu:dense_enriched_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}').strongNBT())
        .itemOutputs('kubejs:runic_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(5000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station('runic_time_4')
        .itemInputs('gtceu:dense_enriched_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminium"}').strongNBT())
        .itemOutputs('kubejs:runic_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(4500)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station('runic_mixed')
        .itemInputs('gtceu:dense_enriched_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum"}').strongNBT())
        .itemOutputs('3x kubejs:runic_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(5000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station('pathway_count_1x')
        .itemInputs('gtceu:dense_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}').strongNBT())
        .itemOutputs('kubejs:runic_pathway_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.runic_circuitry_assembling_station('pathway_count_2x')
        .itemInputs('gtceu:dense_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}').strongNBT())
        .itemOutputs('2x kubejs:runic_pathway_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.runic_circuitry_assembling_station('pathway_count_3x')
        .itemInputs('gtceu:dense_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}').strongNBT())
        .itemOutputs('3x kubejs:runic_pathway_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.runic_circuitry_assembling_station('pathway_count_4x')
        .itemInputs('gtceu:dense_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}').strongNBT())
        .itemOutputs('4x kubejs:runic_pathway_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.runic_circuitry_assembling_station('pathway_time_1')
        .itemInputs('gtceu:dense_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}').strongNBT())
        .itemOutputs('kubejs:runic_pathway_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(5000)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.runic_circuitry_assembling_station('pathway_time_2')
        .itemInputs('gtceu:dense_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}').strongNBT())
        .itemOutputs('kubejs:runic_pathway_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(4000)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.runic_circuitry_assembling_station('pathway_time_3')
        .itemInputs('gtceu:dense_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}').strongNBT())
        .itemOutputs('kubejs:runic_pathway_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(3000)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.runic_circuitry_assembling_station('pathway_time_4')
        .itemInputs('gtceu:dense_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminium"}').strongNBT())
        .itemOutputs('kubejs:runic_pathway_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(2500)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.runic_circuitry_assembling_station('pathway_mixed')
        .itemInputs('gtceu:dense_naquadah_plate', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum"}').strongNBT())
        .itemOutputs('3x kubejs:runic_pathway_engraved_plating')
        .blastFurnaceTemp(10500)
        .duration(3000)
        .EUt(GTValues.VHA[GTValues.ZPM]);


    event.recipes.gtceu.mixer('screret_dust')
        .itemInputs('2x gtceu:naquadic_netherite_dust', '10x gtceu:tritanium_dust', '5x gtceu:trinium_dust')
        .itemOutputs('17x gtceu:screret_runic_laser_source_base_dust')
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UV]);

    });