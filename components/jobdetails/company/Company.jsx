import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import{icons} from '../../../constants'
import{checkImageURL} from '../../../utils'

const Company = ({companyLogo, jobTitle, companyName, location}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ?companyLogo
              : 'https://banner2.cleanpng.com/20181227/pbb/kisspng-university-of-tennessee-no-logo-no-space-no-choi-5c249c5f60bb11.6709318515459031993962.jpg'
          }}
          style={styles.logoImage}
        />
      </View>
      
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} /</Text>
        <View style={styles.locationBox}>
          <Image
          source={icons.location}
          resizeMode='contain'
          style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>

    </View>
  )
}

export default Company