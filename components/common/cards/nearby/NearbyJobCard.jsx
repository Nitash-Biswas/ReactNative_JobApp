import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

import {checkImageURL} from '../../../../utils';

const NearbyJobCard = ({job, handleNavigate}) => {

  
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={handleNavigate}
    >

      <TouchableOpacity
      style={styles.logoContainer}>
        <Image
          source={{uri: checkImageURL(job.employer_logo)
          ? job.employer_logo
          : 'https://banner2.cleanpng.com/20181227/pbb/kisspng-university-of-tennessee-no-logo-no-space-no-choi-5c249c5f60bb11.6709318515459031993962.jpg'}}
          resizeMode='contain'
          style={styles.logoImage}
        />

      </TouchableOpacity>
      
      

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard