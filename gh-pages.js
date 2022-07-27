
import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git@github.com:sTechLab/VoterFraud2020-webpage.git', // Update to point to your repository
        user: {
            name: 'Anton Abilov',
            email: 'anton.abilov@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);