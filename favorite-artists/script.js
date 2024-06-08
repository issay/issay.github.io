document.addEventListener('DOMContentLoaded', () => {
    fetch('artists.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('artist-container');
            data.profiles.forEach(artist => {
                const profileDiv = document.createElement('div');
                profileDiv.classList.add('profile');

                const img = document.createElement('img');
                img.src = artist.image_url;
                img.alt = artist.name;

                const nameDiv = document.createElement('div');
                nameDiv.classList.add('profile-name');
                nameDiv.innerText = artist.name;

                const link = document.createElement('a');
                link.href = `https://open.spotify.com/artist/${artist.uri.split(':')[2]}`;
                link.target = '_blank';
                link.classList.add('profile-link');
                link.innerText = 'Profile';

                profileDiv.appendChild(img);
                profileDiv.appendChild(nameDiv);
                profileDiv.appendChild(link);
                container.appendChild(profileDiv);
            });
        });
});
