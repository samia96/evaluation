export const ELECTRICITE_EAU_ASSAINISSEMENT = [
    {
        id: 1,
        rubrique:'Energie',
        critere: [
            {
                no: 1,
                name: "L'établissement dispose d'un groupe électrogène, se déclenchant automatiquement en cas de coupure du courant.",
                 case: [
                    {
                        numero:"0"
                    },
                    {
                        numero:"3"
                    },

                ]
            },
            {
                no: 2,
                name: "Le groupe électrogène est de capacité suffisante pour couvrir l'ensemble des besoins de l'établissement.",
                 case: [
                    {
                        numero:"0"
                    },
                   {
                        numero:"2"
                    }

                ]
            },
            {
                no: 3,
                name: "Une partie de l'énergie utilisée par l'établissement est renouvelable.",
                 case: [
                    {
                        numero:"0"
                    },
                    {
                        numero:"1"
                    }

                ]
            },     

        ]
    },
    {
        id: 2,
        rubrique:'Eau',
        critere: [
            {
                no: 1,
                name: "Dans le cas où l'établissement n'est pas connecté au réseau de distribution de l'eau potable, il dispose d'un réservoir d'eau ou un forage couvrant l'ensemble de ses besoins.",
                 case: [
                    {
                        numero:"0"
                    },
                    {
                        numero:"3"
                    },

                ]
            },
            {
                no: 2,
                name: "En cas d'existence d'un puit, celui-ci est situé à une distance minimale de 15 mètres de tout dispositif d'assainissement liquide.",
                case: [
                    {
                        numero:"0"
                    },
                    {
                        numero:"3"
                    },

                ]
            },
            {
                no: 3,
                name: "L'eau du forage/réservoir régulièrement traitée.",
                case: [
                    {
                        numero:"0"
                    },
                    {
                        numero:"3"
                    },

                ]
            },
            {
                no: 4,
                name: "L'eau du forage/réservoir régulièrement analysée.",
                case: [
                    {
                        numero:"0"
                    },
                    {
                        numero:"3"
                    },

                ]
            },
            {
                no: 5,
                name: "L'établissement a mis en place un dispositif de récupération des eaux de la pluie",
                case: [
                    {
                        numero:"0"
                    },
                    {
                        numero:"1"
                    },

                ]
            },
            {
                no: 6,
                name: "Utilisation de produits de lavage écologiques.",
                 case: [
                    {
                        numero:"0"
                    },
                    {
                        numero:"1"
                    }
                ]
            },
            
        ]
    },


    {
        id: 3,
        rubrique:'Assainissement',
        critere: [
            {
                no: 1,
                name: "Dans le cas où l'établissement n'est pas connecté au réseau de d'assainissement public, une solution alternative adaptée est mise en place.",
                case: [
                    {
                        numero:"0"
                    },
                    {
                        numero:"3"
                    },

                ]
            },
            {
                no: 2,
                name: "L'établissement a mis en place un dispositif de récupération et réutilisation des eaux usées.",
                 case: [
                    {
                        numero:"0"
                    },
                    {
                        numero:"1"
                    }
                ]
            },
                        

        ]
    },
]