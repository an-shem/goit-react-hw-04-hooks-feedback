import PropTypes from 'prop-types';
import { NotificationTitel } from './Notification.styled';

export default function Notification({ message }) {
  return <NotificationTitel>{message}</NotificationTitel>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
