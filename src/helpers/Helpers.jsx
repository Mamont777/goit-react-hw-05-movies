import moment from 'moment';

export function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote > 6) {
    return 'orange';
  } else {
    return 'red';
  }
}
export function getReleaseYear(releaseDate) {
  return releaseDate ? releaseDate.slice(0, 4) : '';
}

export function formatReleaseDate(releaseDate) {
  return releaseDate ? moment(releaseDate).format('MMM D, YYYY') : '';
}

export function formatRuntime(runtime) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
}
