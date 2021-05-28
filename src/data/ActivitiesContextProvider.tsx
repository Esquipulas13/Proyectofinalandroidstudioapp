import React, { useState } from 'react';
import ActivitiesContext, { ActivitiesContextModel, Activity, ActivityType } from './activities-context';

const ActivitiesContextProvider: React.FC = (props) => {
    const [activities, setActivities] = useState<Activity[]>(
        [
            {
                id: Math.random().toString(),
                title: 'My daile sleep',
                description: 'Sleep through the night after a day of quarentine',
                hour: '23:00',
                activityType: 'rest',
                imageUrl: '/assets/imagenes/rest.jpg',
                isComplete: false
            },
            {
                id: Math.random().toString(),
                title: 'Hard work',
                description: 'Work in the proyects I have as Tribalyte',
                hour: '9:00',
                activityType: 'work',
                imageUrl: '/assets/imagenes/work.jpg',
                isComplete: false
            },
            {
                id: Math.random().toString(),
                title: 'Play ping pong',
                description: 'Play a ping pong mathc on the hall table',
                hour: '19:00',
                activityType: 'hobby',
                imageUrl: '/assets/imagenes/hobby.jpg',
                isComplete: false
            },
            {
                id: Math.random().toString(),
                title: 'Learn Ionic 5 with React',
                description: 'Complete this course to learn React, Hooks, Context, Ionic...',
                hour: '17:00',
                activityType: 'hobby',
                imageUrl: '/assets/imagenes/hobby.jpg',
                isComplete: false
            }

        ]
    );

    const addActivity = (title: string, description: string, hour: string, activityType: ActivityType) => {
        let imageUrl = '';
        switch (activityType) {
            case 'rest':
                imageUrl = '/assets/imagenes/rest.jpg'
                break;
            case 'hobby':
                imageUrl = '/assets/imagenes/hobby.jpg'
                break;
            case 'work':
                imageUrl = '/assets/imagenes/work.jpg'
                break;
            default:
                imageUrl = '/assets/imagenes/rest.jpg'
                break;
        }
        const newAcivity: Activity = {
            id: Math.random().toString(),
                title,
                description,
                hour,
                activityType,
                imageUrl,
                isComplete: false
        }
        setActivities(currActivities =>{
            return [...currActivities, newAcivity];
        });
    };

    const completeActivity = (activityId: string) =>{
        setActivities(currActivities =>{
            const updatedActivities = [...currActivities];
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            const updatedActivity = {...updatedActivities[selectedActivityIndex], isComplete: true};
            updatedActivities[selectedActivityIndex] = updatedActivity;
            return updatedActivities;
        });
    };
    const activitiesContext: ActivitiesContextModel = {
        activities,
        addActivity,
        completeActivity
    }
    return (
        <ActivitiesContext.Provider value={activitiesContext}>
            {props.children}
        </ActivitiesContext.Provider>
    );
};

export default ActivitiesContextProvider;