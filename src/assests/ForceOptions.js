function ForceOptions() {
    const forceOptions = [{
        elite: {
            title: 'Elite',
            commander: {
                title: 'Elite Commander/Sergeant Major',
                level: 12,
                points: 30,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 6,
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 5
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 6
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 3
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 6
                }
            },
            officer: {
                title: 'Elite Officer/Troop Sergeant',
                level: 11,
                points: 25,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 5
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 5
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 6
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 3
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 6
                }
            }, 
            operator: {
                title: 'Elite Operator',
                level: 10,
                points: 20,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 5
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 5
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 6
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 3
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 6
                }
            }
        },
        pro: {
            title: 'Professional',
            commander: {
                title: 'Professional Commander/Sergeant Major',
                level: 9,
                points: 20,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 5
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 4
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 5
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 2
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 4
                }
            },
            officer: {
                title: 'Professional Officer/Sergeant',
                level: 8,
                points: 15,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 4
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 4
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 5
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 2
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 4
                }
            },
            soldier: {
                title: 'Professional Soldier',
                level: 7,
                points: 10,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 3
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 4
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 5
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 2
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 4
                }
            }
        },
        trained: {
            title: 'Trained',
            commander: {
                title: 'Trained Commander/Sergeant Major',
                level: 6,
                points: 15,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 4
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 3
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 4
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 2
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 4
                }
            },
            officer: {
                title: 'Trained Officer/Sergeant',
                level: 5,
                points: 10,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 3
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 3
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 4
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 2
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 4
                }
            },
            soldier: {
                title: 'Trained Soldier',
                level: 4,
                points: 5,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 2
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 3
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 4
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 2
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 4
                }
            }
        },
        militia: {
            title: 'Militia',
            commander: {
                title: 'Militia Commander/Sergeant Major',
                level: 3,
                points: 10,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 4
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 3
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 4
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 2
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 3
                }
            },
            officer: {
                title: 'Militia Officer',
                level: 2,
                points: 5,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 3
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 3
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 3
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 2
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 3
                }
            },
            militiaman: {
                title: 'Militiaman',
                level: 1,
                points: 2,
                cd: {
                    id: 'CD',
                    title: 'Command',
                    value: 2
                },
                ag: {
                    id: 'AG',
                    title: 'Agiltiy',
                    value: 3
                },
                sg: {
                    id: 'SG',
                    title: 'Shooting',
                    value: 3
                },
                dc: {
                    id: 'DC',
                    title: 'Defence',
                    value: 2
                },
                me: {
                    id: 'ME',
                    title: 'Melee',
                    value: 3
                }
            }
        },
        civilian: {
            title: 'Untrained/Civilian',
            level: 0,
            points: 1,
            cd: {
                id: 'CD',
                title: 'Command',
                value: 1
            },
            ag: {
                id: 'AG',
                title: 'Agiltiy',
                value: 2
            },
            sg: {
                id: 'SG',
                title: 'Shooting',
                value: 2
            },
            dc: {
                id: 'DC',
                title: 'Defence',
                value: 1
            },
            me: {
                id: 'ME',
                title: 'Melee',
                value: 2
            }
        }

    }]
        
    return forceOptions;
}

export default ForceOptions;

