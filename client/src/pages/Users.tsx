import {AddUserModal} from '@/components/module/users/AddUserModal';

export default function Users() {
    return (
        <div className='mt-20'>
            <div className='flex justify-end'>
                <AddUserModal />
            </div>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {/* {users.map((user) => (
                    <div className='border-2 border-primary rounded-md p-10 flex justify-between'>
                        <p className='text-xl font-bold'>{user.userName}</p>

                        <Trash2
                            onClick={() => dispatch(removeUser(user.id))}
                            className='text-red-500 cursor-pointer'
                        />
                    </div>
                ))} */}
            </div>
        </div>
    );
}
