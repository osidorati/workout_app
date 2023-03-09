import { useQuery } from '@tanstack/react-query'
import UserService from '../../../services/user.service.js'

export const useProfile = () => {
	return useQuery(['get profile'], () => UserService.getProfile(), {
		select: ({ data }) => data
	})
}
