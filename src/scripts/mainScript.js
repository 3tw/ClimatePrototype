const header = new Vue ({
    el: "#header",
    data: {
        header: `change won't just go away | you're <br>
        running out of time`
    },
    mounted: function() {
        setTimeout(() => {
            this.header = `change won't just go away | you' re <br>`
       }, 6000);
    }
})

const main_text = new Vue ({
    el: "#text",
    data: {

        title: "Human Effects on Climate",
        text: `Human activities are continuing to affect the Earth’s energy budget by changing the emissions and
        resulting atmospheric concentrations of radiatively important gases and aerosols and by changing land
        surface properties. 
        Previous assessments have already shown through multiple lines of evidence that the
        climate is changing across our planet, largely as a result of human activities. The most compelling
        evidence of climate change derives from observations of the atmosphere, land, oceans and cryosphere.
        Unequivocal evidence from in situ observations and ice core records shows that the atmospheric
        concentrations of important greenhouse gases such as carbon dioxide (CO2), methane (CH4), and nitrous
        oxide (N2O) have increased over the last few centuries.
        The processes affecting climate can exhibit considerable natural variability. Even in the absence of
        external forcing, periodic and chaotic variations on a vast range of spatial and temporal scales are
        observed. 
        Much of this variability can be represented by simple (e.g., unimodal or power law)
        distributions, but many components of the climate system also exhibit multiple states—for instance, the
        glacial–interglacial cycles and certain modes of internal variability such as El Niño-Southern
        Oscillation (ENSO). Movement between states can occur as a result of natural variability, or in response
        to external forcing. The relationship among variability, forcing and response reveals the complexity of
        the dynamics of the climate system: the relationship between forcing and response for some parts of the
        system seems reasonably linear; in other cases this relationship is much more complex.
        Multiple Lines of Evidence for Climate Change
        Global mean surface air temperatures over land and oceans have increased over the last 100 years.
        Temperature measurements in the oceans show a continuing increase in the heat content of the oceans.
        Analyses based on measurements of the Earth’s radiative budget suggest a small positive energy imbalance
        that serves to increase the global heat content of the Earth system. Observations from satellites and in
        situ measurements show a trend of significant reductions in the mass balance of most land ice masses and
        in Arctic sea ice. The oceans’ uptake of CO2 is having a significant effect on the chemistry of sea
        water. Paleoclimatic reconstructions have helped place ongoing climate change in the perspective of
        natural climate variability. 
        Observations of CO2 concentrations, globally averaged temperature and sea level rise are generally
        well within the range of the extent of the earlier IPCC projections. The recently observed increases in
        CH4 and N2O concentrations are smaller than those assumed in the scenarios in the previous assessments.
        Each IPCC assessment has used new projections of future climate change that have become more detailed as
        the models have become more advanced. Similarly, the scenarios used in the IPCC assessments have
        themselves changed over time to reflect the state of knowledge. The range of climate projections from
        model results provided and assessed in the first IPCC assessment in 1990 to those in the 2007 AR4
        provides an opportunity to compare the projections with the actually observed changes, thereby examining
        the deviations of the projections from the observations over time.
        Climate change, whether driven by natural or human forcing, can lead to changes in the likelihood of the
        occurrence or strength of extreme weather and climate events or both.
        Since the AR4, the observational basis has increased substantially, so that some extremes are now examined over most land areas.
        Furthermore, more models with higher resolution and a greater number of regional models have been used
        in the simulations and projections of extremes.`,
        message: " "
        },
    template: `
        <div>
            <p>{{title}}</p>
            <p>{{text}}</p>
            <p>{{message}}</p>
        </div>
        `,

    mounted: function() {
        setTimeout(() => {
            this.title = " "
            this.text = " "
       }, 4000);
    },
    updated: function() {
        setTimeout(() => {
            this.title = "You can refresh the page"
            this.text = "Who is gonna refresh the Earth?"
       }, 2000);
    }
})

